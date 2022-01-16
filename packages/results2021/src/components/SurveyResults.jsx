import { h, Fragment } from "preact";

import { pairs } from "../lib/questions";
import { makeVizTextContent } from "../lib/viztools";

import { SurveyPair } from "./SurveyPair";
import { Viz } from "./viz/Viz";

export function SurveyResults({ db, reducer }) {
  const makeViz = pair => <Viz db={db} reducer={reducer} pair={pair} />;

  return (
    <>
      <SurveyPair viz={makeViz(pairs[0])} content={{ x: { title: "Introduction" } }} describe={false} />
      <div class="map-section-title">
        Part I:
        <br />
        You
      </div>
      {pairs.slice(1, 4).map((pair, i) => (
        <SurveyPair key={i} viz={makeViz(pair)} content={makeVizTextContent(pair)} />
      ))}
      <div class="map-section-title">
        Part II:
        <br />
        Transformation
      </div>
      {pairs.slice(4, 8).map((pair, i) => (
        <SurveyPair key={i} viz={makeViz(pair)} content={makeVizTextContent(pair)} />
      ))}
      <div class="map-section-title">
        Part III:
        <br />
        In 20 Years
      </div>
      {pairs.slice(8, 11).map((pair, i) => (
        <SurveyPair key={i} viz={makeViz(pair)} content={makeVizTextContent(pair)} />
      ))}
      <div class="map-section-title">
        Part IV:
        <br />
        Conclusion
      </div>
      {pairs.slice(11).map((pair, i) => (
        <SurveyPair key={i} viz={makeViz(pair)} content={makeVizTextContent(pair)} />
      ))}
    </>
  );
}
