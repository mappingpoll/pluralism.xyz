import { XYDatum } from "../../lib/data";

type RectangleDatum = Required<XYDatum>;
type LineXDatum = XYDatum & { x: number[] };
type LineYDatum = XYDatum & { y: number[] };

export const describesRectangle = (d: XYDatum): d is RectangleDatum => d.x?.[1] != null && d.y?.[1] != null;
export const describesLineX = (d: XYDatum): d is LineXDatum => d.x?.[1] != null && d.y?.[1] == null;
export const describesLineY = (d: XYDatum): d is LineYDatum => d.x?.[1] == null && d.y?.[1] != null;
