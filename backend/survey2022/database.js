import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV ?? "development";

const CREATE_TABLE_USERS =
  "CREATE TABLE IF NOT EXISTS users (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb, created_at timestamp DEFAULT CURRENT_TIMESTAMP)";

const initQueries = [CREATE_TABLE_USERS];

const pool = new pg.Pool({
  ssl: env === "production" ? undefined : false,
});

pool.on("error", err => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

async function initDb() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await Promise.all(initQueries.map(async q => await client.query(q)));
    await client.query("COMMIT");
  } catch (e) {
    console.error(`Error initializing database: ${e}`);
    await client.query("ROLLBACK");
    throw e;
  } finally {
    console.debug("DB initialized!");
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
    } catch (e) {
      await client.query("ROLLBACK");
      console.error(`Error inserting entry: ${e}`);
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
      console.error(`Error listing entries: ${e}`);
      throw e;
    } finally {
      client.release();
    }

    return data;
  };
  return { insertEntry, listEntries };
}

export { initDb, Client as dbClient };
