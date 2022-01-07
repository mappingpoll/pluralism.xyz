export function responsesPerQuestion({ db, questions }) {
  let result = {};

  for (const question_num of Object.keys(questions)) {
    const count = db.countResponsesForQ(question_num);

    result[question_num] = count;
  }

  return { counts: result };
}

export function pairwiseQuestions({ questions }) {
  const pairs = [];
  let qs = Object.keys(questions);
  for (let i = 0; i < qs.length; i += 2) {
    let a = qs[i];
    let b = qs[i + 1] ?? null;
    pairs.push([a, b]);
  }
  return { pairs };
}

// function Counts() {
//   this.origin = 0
//   this.quadrants = { nw: 0, ne: 0, se: 0, sw: 0 }
//   this.outerQuadrants = { nw: 0, ne: 0, se: 0, sw: 0 }
//   this.axes = { n: 0, e: 0, s: 0, w: 0 }
//   this.outerAxes = { n: 0, e: 0, s: 0, w: 0 }
// }
//
// export function quadrantCounts({ db, pair }) {
//   const [question_x, question_y] = pair
//
//   const { points: points_x } = db.getPointsForQuestion(question_x);
//   const { points: points_y } = db.getPointsForQuestion(question_y);
//
//
//   let counts = new Counts();
//
//   for (const [user, row_x] of Object.entries(points_x)) {
//   }
//
//   return { counts }
// }
