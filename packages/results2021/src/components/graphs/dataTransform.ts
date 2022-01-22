import { XYDatum } from "../../lib/data";

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
    }
    if (layer) this.layer = layer;
  }

  measure() {
    this.width = this.width ?? Math.abs(this.x1 - this.x0);
    this.height = this.height ?? Math.abs(this.y1 - this.y0);
    this.area = this.width * this.height;
  }

  static doOverlap(a: Rectangle, b: Rectangle): boolean {
    if (a.x0 >= b.x1 || a.x1 <= b.x0) return false;
    if (a.y0 >= b.y1 || a.y1 <= b.y0) return false;
    return true;
  }

  static intersection(a: Rectangle, b: Rectangle): Rectangle {
    const xyl = {
      x0: a.x0 < b.x0 ? b.x0 : a.x0,
      y0: a.y0 < b.y0 ? b.y0 : a.y0,
      x1: a.x1 > b.x1 ? b.x1 : a.x1,
      y1: a.y1 > b.y1 ? b.y1 : a.y1,
    };
    const r = new Rectangle(xyl);
    r.layer = Math.max(a.layer, b.layer) + 1;
    r.measure();
    return r;
  }
}
