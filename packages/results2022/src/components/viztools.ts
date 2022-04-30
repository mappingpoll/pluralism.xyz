import { Pair, questions } from "../lib/questions";

const getTitle = (q: string): string => questions[q].title;
const getQuestion = (q: string): string => questions[q].question;

interface Row {
  value: string;
  name: string;
}

interface TableContent {
  max: Row;
  midMax: Row | false;
  zero: Row | false;
  midMin: Row | false;
  min: Row;
}

const getTableContent = (q: string): TableContent => {
  const max = questions[q].max;
  const midMax = questions[q]?.midmax ?? false;
  const zero = questions[q]?.zero ?? false;
  const midMin = questions[q]?.midmin ?? false;
  const min = questions[q].min;
  return {
    max: { value: zero ? "+10" : "+", name: max },
    midMax: midMax ? { value: "+5", name: midMax } : false,
    zero: zero ? { value: "0", name: zero } : false,
    midMin: midMin ? { value: "-5", name: midMin } : false,
    min: { value: zero ? "-10" : "-", name: min },
  };
};

interface AxisDescription {
  title: string;
  question: string;
  table: TableContent;
}

export interface VizDescription {
  x: AxisDescription;
  y: AxisDescription;
}

const describeAxis = (v: string): AxisDescription => ({
  title: getTitle(v),
  question: getQuestion(v),
  table: getTableContent(v),
});

export const describeGraph = ({ x, y }: Pair): VizDescription => ({
  x: describeAxis(x),
  y: describeAxis(y),
});
