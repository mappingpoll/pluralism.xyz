import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV;

const respondentsTableQuery = "CREATE TABLE IF NOT EXISTS respondents (timestamp TEXT PRIMARY KEY UNIQUE NOT NULL)";
const pointsTableQuery = "CREATE TABLE IF NOT EXISTS points (" +
  "timestamp TEXT NOT NULL," +
  "question_num INTEGER NOT NULL," +
  "point0 REAL NOT NULL," +
  "point1 REAL," +
  "FOREIGN KEY (timestamp)" +
  "REFERENCES respondents (timestamp)" +
  ")";
const formTableQuery = "CREATE TABLE IF NOT EXISTS form (" +
  "timestamp TEXT NOT NULL," +
  "comment TEXT," +
  "submittedInGallery INTEGER," +
  "email TEXT," +
  "FOREIGN KEY (timestamp)" +
  "REFERENCES respondents (timestamp)" +
  ")";
const initQueries = [respondentsTableQuery, pointsTableQuery, formTableQuery];

const respondentQuery = "INSERT INTO respondents (timestamp) VALUES ($1)";
const pointsQuery = "INSERT INTO points (timestamp, question_num, point0, point1) VALUES ($1, $2, $3, $4)";
const formQuery = "INSERT INTO form (timestamp, comment, submittedInGallery, email) VALUES ($1, $2, $3, $4)";


let pool;

if (env === "dev") {
  pool = new pg.Pool();
} else if (env === "prod") {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}

pool.on("error", err => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const initDb = async () => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await Promise.all(initQueries.map( async q => await client.query(q)));
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

const dbClient = () => {
  const insertEntry = async (data) => {
    const client = await pool.connect();

    try {
      const ts = new Date().toISOString();
      const questions = Object.values(data.questions);
      const { comment, submittedInGallery, email } = data.form;

      await client.query("BEGIN");

      await client.query(respondentQuery, [ts]);

      for (const answer of questions) {
        const { num, points } = answer;
        await client.query(pointsQuery, [ts, num, points[0], points[1]]);
      }

      await client.query(formQuery, [ts, comment, submittedInGallery ? 1 : 0, email]);

      await client.query("COMMIT");
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  };

  const listEntries = () => {
  };
  return { insertEntry, listEntries };
};


export { initDb, dbClient };
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
// 			const respondentQuery = 'INSERT INTO respondents (timestamp) VALUES (?)';
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
// FROM respondents
// INNER JOIN answers on answers.timestamp = respondents.timestamp
// INNER JOIN points on points.timestamp = respondents.timestamp
// `;
// 			const entries = db.prepare(query).all();
// 			db.close();
// 			return entries;
// 		};
//
// 		return { insertEntry, listEntries };
// 	};