import { XYData, XYDatum } from "../../../lib/data";
import { describesLineX, describesLineY, describesRectangle } from "../shapes";

export interface Rectangle {
  x0: number;
  y0: number; // top left corner
  x1: number;
  y1: number; // bottom right corner
  width: number;
  height: number;
  layer: number;
  isPoint: boolean;
  users: string[];
}

interface Corners {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  users: string[];
  layer: number;
}

function isCorners(d: XYDatum | Corners): d is Corners {
  return (d as Corners).x0 !== undefined;
}

export class Rectangle implements Rectangle {
  static MIN_LENGTH = 0.04;
  layer = 0;
  isPoint = false;
  users: string[] = [];
  constructor(d: XYDatum | Corners) {
    if (isCorners(d)) {
      this.x0 = d.x0;
      this.x1 = d.x1;
      this.y0 = d.y0;
      this.y1 = d.y1;
      this.users = d.users;
      this.layer = d.layer;
    } else {
      this.users = [d.user];
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
        this.isPoint = true;
      }
    }
    if (!this.isPoint) {
      this.measure();
    }
  }

  get area() {
    return this.height * this.width;
  }

  measure() {
    this.width = this.width ?? Math.abs(this.x1 - this.x0);
    this.height = this.height ?? Math.abs(this.y1 - this.y0);
  }

  equals(other: Rectangle): boolean {
    return this.x0 === other.x0 && this.x1 === other.x1 && this.y0 === other.y0 && this.y1 === other.y1;
  }

  covers(other: Rectangle): boolean {
    return this.x0 <= other.x0 && this.y0 <= other.y0 && this.x1 >= other.x1 && this.y1 >= other.y1;
  }

  intersects(other: Rectangle): boolean {
    if (this.x0 >= other.x1 || this.x1 <= other.x0) return false;
    if (this.y0 >= other.y1 || this.y1 <= other.y0) return false;
    return true;
  }

  intersect(other: Rectangle): Rectangle | null {
    if (!this.intersects(other)) return null;

    const xyl: Corners = {
      x0: this.x0 < other.x0 ? other.x0 : this.x0,
      y0: this.y0 < other.y0 ? other.y0 : this.y0,
      x1: this.x1 > other.x1 ? other.x1 : this.x1,
      y1: this.y1 > other.y1 ? other.y1 : this.y1,
      users: this.users.concat(other.users),
      layer: Math.max(this.layer, other.layer) + 1,
    };
    const r = new Rectangle(xyl);
    return r;
  }
}

export function data2Rectangles(data: XYData): Rectangle[] {
  const rectangles = [];
  for (const d of data) {
    const r = new Rectangle(d);
    rectangles.push(r);
  }
  return rectangles; //.sort((a, b) => b.area - a.area);
}

export function intersectRectangles(rects: Rectangle[]): Rectangle[] {
  const stack: Rectangle[] = [];

  for (const r of rects) {
    const ontoStack = [];

    for (const s of stack) {
      if (r.covers(s)) {
        s.users = s.users.concat(r.users);
        s.layer += 1;
      } else {
        const i = r.intersect(s);

        if (i != null) ontoStack.push(i);
      }
    }

    stack.push(r, ...ontoStack);
  }

  return stack;
}
