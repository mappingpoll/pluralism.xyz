import { html, useEffect, useState } from "../../lib/utils";

import { questions } from "../../lib/questions";
import "./Viz.css";
import { Mess } from "./Mess";

function zipPoints({ x, y }) {
  let result = [];

  for (const user in x) {
    const row = {
      user,
      x: { value: x[user] },
      y: y[user] ? { value: y[user] } : null,
    };

    result.push(row);
  }
  for (const user in y) {
    if (!x[user]) {
      const row = {
        user,
        x: null,
        y: { value: y[user] },
      };
      result.push(row);
    }
  }
  return result;
}

export function Viz({ db, pair, reducer }) {
  const { state, dispatch } = reducer;

  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const dataX = await db.getPointsForQuestion(pair[0]);
      const dataY = await db.getPointsForQuestion(pair[1]);

      const data = zipPoints({ x: dataX, y: dataY });
      setData(data);
    })();
  }, [db, setData, pair]);

  const [x, y] = pair;

  return html`<div class="viz-container">
    <div class="graph">${data != null && html`<${Mess} data=${data} state=${state} dispatch=${dispatch} />`}</div>

    <div class="right">
      <div class="label">${questions[x].max}</div>
    </div>
    <div class="left">
      <div class="label">${questions[x].min}</div>
    </div>
    <div class="top">
      <div class="label">${questions[y].max}</div>
    </div>
    <div class="bottom">
      <div class="label">${questions[y].min}</div>
    </div>
  </div>`;
}
