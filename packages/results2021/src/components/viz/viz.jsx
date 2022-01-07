import { h, Fragment } from "preact";

import { useLocale } from "../../lib/i18n";
import { graphType2Component } from "../../lib/misc";
import "./viz.css"
import { zipPoints } from "../../lib/data-manipulation";

export async function Viz({ db, state, pair, dispatch }) {
  const { i18n } = useLocale();
  const { colorScale, options, brushMap } = state;

  if (pair == null) return <></>;
  const [x, y] = pair;

  const dataX = await db.getPointsForQuestion(x);
  const dataY = await db.getPointsForQuestion(y);

  const data = zipPoints({ x: dataX, y: dataY });

  const SVG = graphType2Component(options.graph);

  return (
    <div class="vizContainer">
      <div class="viz">
        <SVG
          state={state}
          data={data}
          columns={pair}
          colorScale={colorScale}
          options={options}
          brushMap={brushMap}
          dispatch={dispatch}
        />
      </div>

      <div class={"label right"}>
        {i18n(`questions.${x}.max`)}
      </div>
      <div class={"label left"}>
        {i18n(`questions.${x}.min`)}
      </div>
      <div class={"label bottom"}>
        {i18n(`questions.${y}.min`)}
      </div>
      <div class={"label top"}>
        {i18n(`questions.${y}.max`)}
      </div>
    </div>
  );
}
