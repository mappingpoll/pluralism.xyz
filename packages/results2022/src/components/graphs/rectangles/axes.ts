import { BaseType, path, Path, Selection } from "d3";

import { xScale, yScale } from "./scales";
import { ORIGIN, DOMAIN, ARROW_PADDING, ARROW_LENGTH, ARROW_FEATHER_SIZE, VIEWBOX } from "./constants";

const CARDINALS = [
  [
    [
      [1, 0],
      [0, 1],
    ],
    [
      [-1, 0],
      [0, 1],
    ],
  ],
  [
    [
      [0, -1],
      [1, 0],
    ],
    [
      [0, -1],
      [-1, 0],
    ],
  ],
  [
    [
      [-1, 0],
      [0, -1],
    ],
    [
      [1, 0],
      [0, -1],
    ],
  ],
  [
    [
      [0, 1],
      [-1, 0],
    ],
    [
      [0, 1],
      [1, 0],
    ],
  ],
];

const ARROW_TIPS = [
  [ORIGIN.x, 0],
  [VIEWBOX[2], ORIGIN.y],
  [ORIGIN.x, VIEWBOX[3]],
  [0, ORIGIN.y],
];

const arrowPaths = ARROW_TIPS.map((arrow, i) => {
  const translate = (n: 0 | 1) => (p: number, j: number) =>
    p + CARDINALS[i][n][j][0] * ARROW_FEATHER_SIZE + CARDINALS[i][n][j][1] * ARROW_LENGTH;
  const v1 = arrow.map(translate(0));
  const v2 = arrow.map(translate(1));
  return [...arrow, ...v1, ...v2];
});

function drawXaxis(path: Path) {
  path.moveTo(xScale(DOMAIN[0]) - ARROW_PADDING, ORIGIN.y);
  path.lineTo(xScale(DOMAIN[1]) + ARROW_PADDING, ORIGIN.y);
  return path.toString();
}
function drawYaxis(path: Path) {
  path.moveTo(ORIGIN.x, yScale(DOMAIN[0]) + ARROW_PADDING);
  path.lineTo(ORIGIN.x, yScale(DOMAIN[1]) - ARROW_PADDING);
  return path.toString();
}

export function xAxis<E extends BaseType, D, P extends BaseType, PD>(g: Selection<E, D, P, PD>) {
  return g.append("path").attr("class", "axis").attr("d", drawXaxis(path()));
}
export function yAxis<E extends BaseType, D, P extends BaseType, PD>(g: Selection<E, D, P, PD>) {
  return g.append("path").attr("class", "axis").attr("d", drawYaxis(path()));
}

export function arrowheads<E extends BaseType, D, P extends BaseType, PD>(g: Selection<E, D, P, PD>) {
  g.attr("class", "arrowhead")
    .selectAll("path")
    .data(arrowPaths)
    .join("path")
    .attr("d", d => `M${d[0]} ${d[1]} L ${d[2]} ${d[3]} L ${d[4]} ${d[5]} Z`);
}

export function appendAxes<Parent extends BaseType>(svg: Selection<SVGElement, unknown, Parent, unknown>) {
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.append("g").call(arrowheads);
}
