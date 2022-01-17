import { html, useMemo } from "../lib/utils";

import { questions } from "../lib/questions";
import { makeVizTextContent } from "../lib/viztools";
import { Viz } from "./viz/Viz";
import { SurveyResults } from "./SurveyResults";
import { SurveyPair } from "./SurveyPair";

export function Maps({ db, reducer }) {
  const { state } = reducer;

  const graphs = useMemo(() => {
    const { x, y } = state.customPair;
    // default view with survey pairs
    if (!x && !y) {
      return html`<${SurveyResults} db=${db} reducer=${reducer} />`;
      // A single custom axis
    } else if ((x && !y) || (!x && y)) {
      return Object.keys(questions).map((n, i) => {
        const pair = [x || n, y || n];
        const viz = html`<${Viz} db=${db} pair=${pair} reducer=${reducer} />`;
        return html`<${SurveyPair} key=${i} viz=${viz} content=${makeVizTextContent(pair)} />`;
      });
      // two custom axes
    } else if (x && y) {
      const pair = [x, y];
      const viz = html`<${Viz} db=${db} pair=${pair} reducer=${reducer} />`;
      return html`<${SurveyPair} viz=${viz} content=${makeVizTextContent(pair)} />`;
    }
  }, [db, state, reducer]);

  return graphs;
}
