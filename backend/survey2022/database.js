import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV ?? "development";

const QUESTION_TYPE = {
  0: "color",
  1: "color-mono",
  2: "slider-xy",
  3: "pcode",
};

const CREATE_TABLE_USERS =
  "CREATE TABLE IF NOT EXISTS users (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb, created_at timestamp)";

const CREATE_TABLE_ANSWERS = `
  CREATE TABLE IF NOT EXISTS answers ( \
  id uuid NOT NULL, \
  question_num integer NOT NULL, \
  question_type integer NOT NULL, \
  answer jsonb NOT NULL, \
  comment text, \
  timestamp timestamp NOT NULL, \
  FOREIGN KEY (id) \
  REFERENCES users (id) \
  )`;

const initQueries = [CREATE_TABLE_USERS, CREATE_TABLE_ANSWERS];

const INSERT_INTO_ANSWERS = `
  INSERT INTO answers (\
  uuid,\
  question_num, \
  question_type, \
  answer, \
  comment, \
  timestamp \
  ) VALUES ($1, $2, $3, $4, $5, $6)`;

const pool = new pg.Pool({
  ssl: env === "production",
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
}

export function Client() {
  const insertEntry = async data => {
    const client = await pool.connect();

    try {
      const ts = new Date().toISOString();
      const { userData } = data;
      const answers = Object.values(data.answers);

      await client.query("BEGIN");

      const res = await client.query("INSERT INTO users(data) VALUES($1)", [userData]);
      const id = res.rows[0].id;

      for (const answer of answers) {
        await client.query(INSERT_INTO_ANSWERS, [
          id,
          answer.questionNum,
          QUESTION_TYPE[answer.questionType],
          answer.value,
          answer.comment,
          ts,
        ]);
      }

      await client.query("COMMIT");
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  };

  const listEntries = async () => {
    const client = await pool.connect();

    let data;
    try {
      data = await client.query(`SELECT * FROM form`);
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
// if (env === 'dev') {
// 	const dbPath = `./${env}.db`;
//
// 	initDb = () => {
// 		const db = new sqlite3.Database(dbPath);
//
// 		db.serialize(function() {
// 			initQueries.forEach(db.run)
// 		});
// 		db.close();
//
// 	};
//
// 	dbPool = () => {
//
// 		const insertEntry = (data) => {
// 			const db = new sqlite3.Database(dbPath);
//
// 			const respondentQuery = 'INSERT INTO users (timestamp) VALUES (?)';
// 			const pointsQuery = 'INSERT INTO points (timestamp, question_num, point0, point1) VALUES (?, ?, ?, ?)';
// 			const formQuery = 'INSERT INTO form (timestamp, comment, submittedInGallery, email) VALUES (?, ?, ?, ?)';
//
// 			const ts = new Date().toISOString();
// 			db.run(respondentQuery, ts);
//
// 			const questions = Object.values(data.questions);
// 			db.serialize(() => {
// 				for (const answer of questions) {
// 					const { num, points } = answer;
// 					db.run(pointsQuery, ts, num, points[0], points[1]);
// 				}
// 			});
//
// 			const { comment, submittedInGallery, email } = data.form;
// 			db.run(formQuery, ts, comment, submittedInGallery ? 1 : 0, email)
// 			db.close();
// 		};
//
// 		const listEntries = () => {
// 			const db = new sqlite3.Database(dbPath);
// 			const query = `
// SELECT timestamp
// FROM users
// INNER JOIN answers on answers.timestamp = users.timestamp
// INNER JOIN points on points.timestamp = users.timestamp
// `;
// 			const entries = db.prepare(query).all();
// 			db.close();
// 			return entries;
// 		};
//
// 		return { insertEntry, listEntries };
// 	};
