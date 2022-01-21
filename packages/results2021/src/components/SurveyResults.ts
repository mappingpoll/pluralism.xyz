import { html } from "htm/preact";

import { Pair, pairs } from "../lib/questions";
import { describeGraph } from "../lib/viztools";
import { Reducer } from "../lib/reducer";
import { SurveyPair } from "./SurveyPair";
import { Graph } from "./Graph";

export function SurveyResults({ reducer }: { reducer: Reducer }) {
  const makeGraph = (pair: Pair) => html`<${Graph} pair=${pair} reducer=${reducer} />`;

  return html`
    <${SurveyPair} graph=${makeGraph(pairs[0])} description=${{ x: { title: "Introduction" } }} noDescribe />
    <div class="map-section-title">
      Part I:
      <br />
      You
    </div>
    ${pairs
      .slice(1, 4)
      .map((pair, i) => html`<${SurveyPair} key=${i} graph=${makeGraph(pair)} description=${describeGraph(pair)} />`)}
    <div class="map-section-title">
      Part II:
      <br />
      Transformation
    </div>
    ${pairs
      .slice(4, 8)
      .map((pair, i) => html`<${SurveyPair} key=${i} graph=${makeGraph(pair)} description=${describeGraph(pair)} />`)}
    <div class="map-section-title">
      Part III:
      <br />
      In 20 Years
    </div>
    ${pairs
      .slice(8, 11)
      .map((pair, i) => html`<${SurveyPair} key=${i} graph=${makeGraph(pair)} description=${describeGraph(pair)} />`)}
    <div class="map-section-title">
      Part IV:
      <br />
      Conclusion
    </div>
    ${pairs
      .slice(11)
      .map((pair, i) => html`<${SurveyPair} key=${i} graph=${makeGraph(pair)} description=${describeGraph(pair)} />`)}
  `;
}
