import pg from "pg";
import debug from "debug";

const log = debug("db");
const error = debug("db:error");

const env = process.env.NODE_ENV ?? "development";
log("env: %s", env);

const CREATE_TABLE_USERS =
  "CREATE TABLE IF NOT EXISTS users (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb, created_at timestamp DEFAULT CURRENT_TIMESTAMP)";

const initQueries = [CREATE_TABLE_USERS];

const pool = new pg.Pool({
  ssl: env === "production" ? undefined : false,
});

pool.on("error", err => {
  error("Unexpected error on idle client: %O", err);
  process.exit(-1);
});

export function Database() {
  this.init = async () => {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await Promise.all(initQueries.map(async q => await client.query(q)));
      await client.query("COMMIT");
    } catch (e) {
      error("Error initializing database: %O", e);
      await client.query("ROLLBACK");
      throw e;
    } finally {
      log("DB initialized!");

      client.release();
    }
    return pool;
  };

  this.insert = async data => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      await client.query("INSERT INTO users(data) VALUES($1)", [data]);

      await client.query("COMMIT");

      log("Inserted new entry %O", data);
    } catch (e) {
      await client.query("ROLLBACK");

      error("Error inserting entry: %O", e);

      throw e;
    } finally {
      client.release();
    }
  };

  this.list = async () => {
    const client = await pool.connect();

    let data;
    try {
      data = await client.query(`SELECT * FROM users`);
    } catch (e) {
      error("Error listing entries: %O", e);
      throw e;
    } finally {
      client.release();
    }

    return data;
  };

  this.populate = async (n = 500) => {
    const client = await pool.connect();
    const users = Array(n)
      .fill("")
      .map(_ => fakeUserData());

    try {
      await client.query("BEGIN");

      users.forEach(async data => await client.query("INSERT INTO users(data) VALUES($1)", [data]));

      await client.query("COMMIT");
    } catch (e) {
      error("Error populating database: %O", e);
      await client.query("ROLLBACK");
      throw e;
    }
  };

  this.clear = async () => {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await client.query("DELETE FROM users");
      await client.query("COMMIT");
    } catch (e) {
      error("Error clearing database: %O", e);
      await client.query("ROLLBACK");
      throw e;
    }
  };
}

function roundRand() {
  return Math.round(Math.random() * 1000) / 1000;
}

function pCode() {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code +=
      i % 2 === 0
        ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) // random letter
        : Math.floor(Math.random() * 10); // random digit
  }
  return code;
}

function fakeUserData() {
  const keys = {
    colors: Array(9)
      .fill("")
      .map((_, i) => `${i}`), // "0" to "8"
    points: ["9", "10", "11", "12", "13", "15"],
    pcode: "14",
  };

  const data = [];

  // random colors
  for (const key of keys.colors) {
    const c = { c: roundRand(), m: roundRand(), y: roundRand() };
    data.push({ key, value: c });
  }

  // random points
  for (const key of keys.points) {
    data.push({ key, value: roundRand() });
  }

  // random pcode
  const p = Math.round(Math.random()) === 0 ? [pCode(), false] : ["", true];
  data.push({ key: keys.pcode, value: p });
  return { data };
}
