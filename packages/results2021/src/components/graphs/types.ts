import { Points, XYData, XYDatum } from "../../lib/data";
import { Reducer } from "../../lib/reducer";

export type Datum = XYDatum & { area: number };
export type Rect = Required<Datum>;
export type LineX = Datum & { x: Points };
export type LineY = Datum & { y: Points };
export type Point = Rect;

export interface Props {
  data: XYData;
  reducer: Reducer;
}
