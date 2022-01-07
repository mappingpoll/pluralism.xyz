import { h, Fragment } from "preact";

import { useLocale } from "../../lib/i18n";
import { graphType2Component } from "../../lib/misc";
import "./viz.css";
import { zipPoints } from "../../lib/data-manipulation";
import { useEffect, useState } from "preact/hooks";

export function Viz({ db, state, pair, dispatch }) {
  const { i18n } = useLocale();
  const { colorScale, options, brushMap } = state;

  const [data, setData] = useState(null);
  const [averageOpacity, setAverageOpacity] = useState(0);

  const [x, y] = pair;

  useEffect(() => {
    if (data == null) {
      getData(...pair);
    }
  }, []);

  useEffect(() => {
    if (data != null) setAverageOpacity(Math.max(2 / data.length, 0.1));
  }, [data, options.opacity]);

  const getData = async (x, y) => {
    const dataX = await db.getPointsForQuestion(x);
    const dataY = await db.getPointsForQuestion(y);

    const data = zipPoints({ x: dataX, y: dataY });
    setData(data);
  };

  const SVG = graphType2Component(options.graph);

  return (
    <div class="viz-container">
      <div class="graph">
        {data != null && (
          <SVG
            state={state}
            data={data}
            pair={pair}
            colorScale={colorScale}
            opacity={averageOpacity}
            options={options}
            brushMap={brushMap}
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
