import { html } from "htm/preact";
import { useMemo } from "preact/hooks";

import { questions } from "../lib/questions";
import { describeGraph } from "./viztools";
import { Graph } from "./Graph";
import { SurveyResults } from "./SurveyResults";
import { SurveyPair } from "./SurveyPair";
import { ActionType, Reducer } from "../lib/reducer";

export function Maps({ reducer }: { reducer: Reducer }) {
  const { state, dispatch } = reducer;

  const handleClick = (ev: MouseEvent) => {
    if (state.graph === "Rectangles" && (ev.target as HTMLElement).tagName !== "rect")
      dispatch({ type: ActionType.SelectNone });
  };

  const graphs = useMemo(() => {
    const { x, y } = state.customPair;

    if (!x && !y) {
      // default view with survey pairs
      return html`<${SurveyResults} reducer=${reducer} />`;
    } else if ((x && !y) || (!x && y)) {
      // A single custom axis
      return Object.keys(questions).map((n, i) => {
        const pair = { x: x || n, y: y || n };
        const graph = html`<${Graph} pair=${pair} reducer=${reducer} />`;
        return html`<${SurveyPair} key=${i} graph=${graph} description=${describeGraph(pair)} />`;
      });
    } else if (x && y) {
      // two custom axes
      const pair = { x, y };
      const graph = html`<${Graph} pair=${pair} reducer=${reducer} />`;
      return html`<${SurveyPair} graph=${graph} description=${describeGraph(pair)} />`;
    }
  }, [state.customPair, reducer]);

  return html`<main class="maps" id="maps" onclick=${handleClick}>${graphs}</main>`;
}
