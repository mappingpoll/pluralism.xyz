export class Database {
  constructor(dbWorker) {
    this.worker = dbWorker;
  }

  queryDb = async (query) => {
    if (this.worker.db == null) return null;
    try {
      return await this.worker.db.exec(query);
    } catch (e) {
      console.error(e);
    }
  };

  getPointsForQuestion = async (question_num) => {
    try {
      if (!question_num)
        throw new ReferenceError("question_num argument must be defined");
      const n = +question_num;
      const points = await this.queryDb(
        `select (timestamp, point0, point1) from points where question_num = ${n}`
      );
      if (points == null) throw new Error("wtf");
      return points[0].values.reduce(
        (obj, row) => (obj[row[0]] = row.slice(1))
      );
    } catch (e) {
      console.error(e);
    }
  };

  getPointsForRespondent = async ({ timestamp, question_num }) => {
    try {
      let query = `select * from points where timestamp = ${timestamp}`;
      if (question_num) query += ` and question_num = ${question_num}`;
      return await this.queryDb(query);
    } catch (e) {
      console.error(e);
    }
  };

  getComments = async () => {
    try {
      return this.queryDb("select comment from form");
    } catch (e) {
      console.error(e);
    }
  };

  countResponsesForQ = async (n) => {
    try {
      let query = "slect count(*) from points";
      if (n) query += ` where question_num = ${n}`;
      return await this.queryDb(query);
    } catch (e) {
      console.error(e);
    }
  };
}

// countRespondents = () => this.queryDb("select count(*) from respondents");
//
// makeJitteryData = () => {
//   this.standardValues.jitteryData = applyJitter(this.standardValues.rawData);
// };
//
// makeColumnPairs = () => {
//   this.standardValues.columnPairs = cleanQuestions(
//     this.standardValues.rawData
//   );
// };
//
// makeHeatmaps = () => {
//   this.standardValues.heatmaps = this.standardValues.columnPairs.map(pair =>
//     calcHeatmap(this.standardValues.rawData, pair)
//   );
// };
//
// makeDensities = () => { };
