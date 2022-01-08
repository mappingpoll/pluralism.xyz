import { h } from "preact";
import { Text } from "preact-i18n";
import { graphType2Component } from "../../lib/misc";
import { questions } from "../../i18n/fr.json";
import "./viz.css"

export function Viz({ state, columns, dispatch }) {
  const { data, colorScale, options, brushMap } = state;
  if (columns == null) return;
  let [x, y] = columns;

  const SVG = graphType2Component(options.graph);

  return (
    <div class="vizContainer">
      <div class="viz">
        <SVG
          state={state}
          data={data}
          columns={columns}
          colorScale={colorScale}
          options={options}
          brushMap={brushMap}
          dispatch={dispatch}
        />
      </div>

      <div class={"label right"}>
        <Text id={`questions.${x}.fr.end`}>{questions[x].en.end}</Text>
      </div>
      <div class={"label left"}>
        <Text id={`questions.${x}.fr.start`}>{questions[x].en.start}</Text>
      </div>
      <div class={"label bottom"}>
        <Text id={`questions.${y}.fr.start`}>{questions[y].en.start}</Text>
      </div>
      <div class={"label top"}>
        <Text id={`questions.${y}.fr.end`}>{questions[y].en.end}</Text>
      </div>
    </div>
  );
}
