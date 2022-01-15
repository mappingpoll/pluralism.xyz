import { questions } from "./questions";
import { pairwiseQuestions } from "./stats";
import { getColorScale } from "./viztools";
import {
  DEFAULT_COLOR_MID,
  DEFAULT_COLOR_SCHEME,
  DEFAULT_DOT_SIZE,
  DEFAULT_DOT_OPACITY,
  DEFAULT_GRAPH_TYPE,
} from "./constants";

const { pairs } = pairwiseQuestions({ questions });

export const initialState = {
  user: [],
  questions,
  vizColumns: [...pairs],
  surveyPairs: [...pairs],
  customPair: {
    x: null,
    y: null,
  },
  brushMap: {},
  colorScale: getColorScale(DEFAULT_COLOR_SCHEME),
  options: {
    reverseColor: false,
    size: DEFAULT_DOT_SIZE,
    opacity: DEFAULT_DOT_OPACITY,
    contourBandwidth: 25,
    graph: DEFAULT_GRAPH_TYPE,
    color: DEFAULT_COLOR_SCHEME,
    k: DEFAULT_COLOR_MID,
    dataset: {
      aga: true,
      ba: true,
      en: true,
      fr: true,
    },
  },
};
