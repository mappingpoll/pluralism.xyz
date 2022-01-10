import { h, Fragment } from "preact";
import { useMemo } from "preact/hooks";

import { useLocale } from "../hooks/useLocale";
import { questions } from "../lib/questions";
import { Viz } from "./viz/Viz";

export function Maps({ state, dispatch, db }) {
  const { i18n } = useLocale();

  const graphs = useMemo(() => {
    const { x, y } = state.customPair;
    // default view with survey pairs
    if (!x && !y) {
      return state.surveyPairs.map((pair, i) => (
        <div key={i} class="map">
          <div class="maptitle">
            <div>{i18n("part.left")}</div>
            <div>{i18n("part.right")}</div>
          </div>
          <div class="mapviz">
            <Viz db={db} state={state} pair={pair} dispatch={dispatch} />
          </div>
        </div>
      ));
      // A single custom axis
    } else if ((x && !y) || (!x && y)) {
      return Object.keys(questions).map((n, i) => (
        <div key={i} class="map">
          <div class="maptitle">{i18n("graph.customgraph")}</div>
          <div class="mapviz">
            <Viz
              db={db}
              state={state}
              pair={[x || n, y || n]}
              dispatch={dispatch}
            />
          </div>
        </div>
      ));
      // two custom axes
    } else if (x && y) {
      return (
        <div class="map">
          <div class="maptitle">{i18n("graph.customgraph")}</div>
          <div class="mapviz">
            <Viz db={db} state={state} pair={[x, y]} dispatch={dispatch} />
          </div>
        </div>
      );
    }
    throw new Error("uh oh");
  }, [db, i18n, dispatch, state]);

  return <>{graphs}</>;
}
