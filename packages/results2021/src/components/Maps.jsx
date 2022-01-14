import { h, Fragment } from "preact";
import { useMemo } from "preact/hooks";

import { useLocale } from "../hooks/useLocale";
import { questions } from "../lib/questions";
import { Viz } from "./viz/Viz";
import { SurveyResults } from "./SurveyResults";

export function Maps({ db, reducer }) {
  const { i18n } = useLocale();
  const { state } = reducer;

  const graphs = useMemo(() => {
    const { x, y } = state.customPair;
    // default view with survey pairs
    if (!x && !y) {
      return <SurveyResults db={db} reducer={reducer} />;
      // A single custom axis
    } else if ((x && !y) || (!x && y)) {
      return Object.keys(questions).map((n, i) => (
        <div key={i} class="map">
          <div class="maptitle">{i18n("graph.customgraph")}</div>
          <div class="mapviz">
            <Viz db={db} pair={[x || n, y || n]} reducer={reducer} />
          </div>
        </div>
      ));
      // two custom axes
    } else if (x && y) {
      return (
        <div class="map">
          <div class="maptitle">{i18n("graph.customgraph")}</div>
          <div class="mapviz">
            <Viz db={db} pair={[x, y]} reducer={reducer} />
          </div>
        </div>
      );
    }
    throw new Error("uh oh");
  }, [db, i18n, state, reducer]);

  return <>{graphs}</>;
}
