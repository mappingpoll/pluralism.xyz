import { VNode } from "preact";
import { Points, XYDatum } from "../../lib/data";
import { Pair } from "../../lib/questions";
import { Reducer } from "../../lib/reducer";

export type Datum = XYDatum & { area: number };
export type Rect = Required<Datum>;
export type LineX = Datum & { x: Points };
export type LineY = Datum & { y: Points };
export type Point = Rect;

export interface GraphProps {
  pair: Pair;
  data: XYDatum[];
  reducer: Reducer;
}

export type Graph = (props: GraphProps) => VNode;
