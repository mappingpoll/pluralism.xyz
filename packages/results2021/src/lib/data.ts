import jsonData from "../assets/data.json";
import { Pair } from "./questions";

export type Points = number[];

interface Datum {
  user: string;
  comment?: string;
  points: Record<string, Points | undefined>;
}

const data: Datum[] = jsonData;

export interface XYDatum {
  user: string;
  x?: Points;
  y?: Points;
}

export type XYData = XYDatum[];

type Comments = Array<{ user: string; comment: string }>;
export const comments: Comments = data.reduce(
  (comments: Comments, d) => (d.comment ? [...comments, { user: d.user, comment: d.comment }] : comments),
  [],
);

export const mapPairToXYData = ({ x, y }: Pair): XYData =>
  data.reduce((res: XYData, d: Datum) => [...res, { x: d.points[x], y: d.points[y], user: d.user }], []);
