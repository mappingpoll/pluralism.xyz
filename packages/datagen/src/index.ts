import { writeFileSync } from "fs";
import { data2Rectangles, intersectRectangles, mapPairToXYData } from "./data";
import { computeGeometries } from "./geometries";
import { geometries2JSON } from "./json";

import { questions } from "./questions";

const numbers = Object.keys(questions);

const object: { [key: string]: string } = {};

for (const q_a of numbers) {
  for (const q_b of numbers) {
    const name = `${q_a}-${q_b}`;

    const pair = { x: q_a, y: q_b };
    const xyData = mapPairToXYData(pair);
    const rectangles = data2Rectangles(xyData);
    const intersections = intersectRectangles(rectangles);

    const geometries = computeGeometries(pair, intersections);

    const json = geometries2JSON(geometries);
    object[name] = json;
  }
}

const result = JSON.stringify(object);

writeFileSync("geos.json", result);
