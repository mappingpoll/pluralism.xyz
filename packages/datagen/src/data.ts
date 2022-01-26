import jsonData from "../../../assets/results2021/data.json";
import { Pair } from "./questions";

type RectangleDatum = Required<XYDatum>;
type LineXDatum = XYDatum & { x: number[] };
type LineYDatum = XYDatum & { y: number[] };

export const describesRectangle = (d: XYDatum): d is RectangleDatum => d.x?.[1] != null && d.y?.[1] != null;
export const describesLineX = (d: XYDatum): d is LineXDatum => d.x?.[1] != null && d.y?.[1] == null;
export const describesLineY = (d: XYDatum): d is LineYDatum => d.x?.[1] == null && d.y?.[1] != null;

export interface Rectangle {
  x0: number;
  y0: number; // top left corner
  x1: number;
  y1: number; // bottom right corner
  width: number;
  height: number;
  area: number;
  layer: number;
  isPoint: boolean;
  user?: string;
}

interface Corners {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

function isCorners(d: XYDatum | Corners): d is Corners {
  return (d as Corners).x0 !== undefined;
}

export class Rectangle implements Rectangle {
  static MIN_LENGTH = 0.04;
  layer = 0;
  isPoint = false;
  constructor(d: XYDatum | Corners, layer?: number) {
    if (isCorners(d)) {
      this.x0 = d.x0;
      this.x1 = d.x1;
      this.y0 = d.y0;
      this.y1 = d.y1;
    } else {
      if (describesRectangle(d)) {
        this.x0 = d.x[0];
        this.y0 = d.y[0];
        this.x1 = d.x[1];
        this.y1 = d.y[1];
      } else if (describesLineX(d)) {
        this.x0 = d.x[0];
        this.y0 = (d.y?.[0] ?? 0) - Rectangle.MIN_LENGTH / 2;
        this.x1 = d.x[1];
        this.y1 = this.y0 + Rectangle.MIN_LENGTH;
        this.height = Rectangle.MIN_LENGTH;
      } else if (describesLineY(d)) {
        this.x0 = (d.x?.[0] ?? 0) - Rectangle.MIN_LENGTH / 2;
        this.y0 = d.y[0];
        this.x1 = this.x0 + Rectangle.MIN_LENGTH;
        this.y1 = d.y[1];
        this.width = Rectangle.MIN_LENGTH;
      } else {
        this.x0 = (d.x?.[0] ?? 0) - Rectangle.MIN_LENGTH / 2;
        this.y0 = (d.y?.[0] ?? 0) - Rectangle.MIN_LENGTH / 2;
        this.x1 = this.x0 + Rectangle.MIN_LENGTH;
        this.y1 = this.y0 + Rectangle.MIN_LENGTH;
        this.width = this.height = Rectangle.MIN_LENGTH;
        this.area = Rectangle.MIN_LENGTH * Rectangle.MIN_LENGTH;
        this.isPoint = true;
      }
      if (!this.isPoint) {
        this.measure();
      }
      this.user = d.user;
    }
    if (layer) this.layer = layer;
  }

  measure() {
    this.width = this.width ?? Math.abs(this.x1 - this.x0);
    this.height = this.height ?? Math.abs(this.y1 - this.y0);
    this.area = this.width * this.height;
  }

  overlaps(other: Rectangle): boolean {
    if (this.x0 >= other.x1 || this.x1 <= other.x0) return false;
    if (this.y0 >= other.y1 || this.y1 <= other.y0) return false;
    return true;
  }

  intersect(other: Rectangle): Rectangle {
    const xyl = {
      x0: this.x0 < other.x0 ? other.x0 : this.x0,
      y0: this.y0 < other.y0 ? other.y0 : this.y0,
      x1: this.x1 > other.x1 ? other.x1 : this.x1,
      y1: this.y1 > other.y1 ? other.y1 : this.y1,
    };
    const r = new Rectangle(xyl);
    r.layer = Math.max(this.layer, other.layer) + 1;
    r.user = this.user; // assume this stacks onto other
    r.measure();
    return r;
  }
}

const byArea = (a: Rectangle, b: Rectangle) => a.area - b.area;

export function data2Rectangles(data: XYData): Rectangle[] {
  const rectangles = [];
  for (const d of data) {
    const r = new Rectangle(d);
    rectangles.push(r);
  }
  return rectangles.sort(byArea);
}

export function intersectRectangles(rectangles: Rectangle[]): Rectangle[] {
  const stack: Rectangle[] = [];

  rectangles.forEach(rectangle => {
    const ontoStack = [];
    for (const s of stack) {
      if (rectangle.overlaps(s)) ontoStack.push(s.intersect(rectangle));
    }
    stack.push(rectangle, ...ontoStack);
  });

  return stack;
}

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
