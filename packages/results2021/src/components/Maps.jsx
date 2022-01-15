import { h, Fragment } from "preact";
import { useMemo } from "preact/hooks";

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
      return <SurveyResults db={db} reducer={reducer} />;
      // A single custom axis
    } else if ((x && !y) || (!x && y)) {
      return Object.keys(questions).map((n, i) => {
        const pair = [x || n, y || n];
        return <SurveyPair
          key={i}
          viz={<Viz db={db} pair={pair} reducer={reducer} />}
          content={makeVizTextContent(pair)} />;
      }
      )
      // two custom axes
    } else if (x && y) {
      const pair = [x, y];
      return (
        <SurveyPair viz={<Viz db={db} pair={pair} reducer={reducer} />} content={makeVizTextContent(pair)} />
      );
    }
    throw new Error("uh oh");
  }, [db, state, reducer]);

  return <>{graphs}</>;
}
