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

async function initDb() {
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
}

export function Client() {
  const insertEntry = async data => {
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

  const listEntries = async () => {
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
  return { insertEntry, listEntries };
}

export { initDb, Client as dbClient };
