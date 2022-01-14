import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

import { useLocale } from "../../hooks/useLocale";
import { zipPoints } from "../../lib/data-manipulation";
import "./Viz.css";
import { Mess } from "./Mess";

export function Viz({ db, pair, reducer }) {
  const { i18n } = useLocale();
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

  const { options, brushMap } = state;
  const [x, y] = pair;

  return (
    <div class="viz-container">
      <div class="graph">
        {data != null && (
          <Mess
            data={data}
            options={options}
            brushMap={brushMap}
            state={state}
            dispatch={dispatch}
          />
        )}
      </div>

      <div class="right">
        <div class="label">{i18n(`questions.${x}.max`)}</div>
      </div>
      <div class="left">
        <div class="label">{i18n(`questions.${x}.min`)}</div>
      </div>
      <div class="top">
        <div class="label">{i18n(`questions.${y}.max`)}</div>
      </div>
      <div class="bottom">
        <div class="label">{i18n(`questions.${y}.min`)}</div>
      </div>
    </div>
  );
}
