import { BaseType, path, Path, Selection } from "d3";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

import { xScale, yScale } from "../../lib/scales";
import { ORIGIN, DOMAIN, ARROW_PADDING, ARROW_LENGTH, ARROW_FEATHER_SIZE, VIEWBOX } from "../../lib/constants";
import { questions } from "../../lib/questions";
import { color } from "../../lib/style";
import { Rectangle } from "../../lib/data";

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

// 3D
const AXIS_TIP = 1.1;
const axisMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

const xAxisGeo = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(-AXIS_TIP, 0, -0.025),
  new THREE.Vector3(-AXIS_TIP, 0, 0),
  new THREE.Vector3(AXIS_TIP, 0, 0),
  new THREE.Vector3(AXIS_TIP, 0, 0.025),
]);

const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -AXIS_TIP, -0.025),
  new THREE.Vector3(0, -AXIS_TIP, 0),
  new THREE.Vector3(0, AXIS_TIP, 0),
  new THREE.Vector3(0, AXIS_TIP, 0.025),
]);

const zAxisGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0.5)]);

const x = new THREE.Line(xAxisGeo, axisMaterial);
const y = new THREE.Line(yAxisGeo, axisMaterial);
const z = new THREE.Line(zAxisGeo, axisMaterial);

const axes = new THREE.Object3D();
axes.add(x, y, z);

const textMaterial = new THREE.MeshBasicMaterial({ color: color.fg, side: THREE.DoubleSide });
const fontLoader = new FontLoader();

const PI = Math.PI;

const wrap = (text: string, width = 30) => {
  const words = text.split(" ");

  const lines = [];

  let line = "";
  for (const word of words) {
    line += `${word} `;
    if (line.length >= width) {
      lines.push(`${line.trimEnd()}`);
      line = "";
    }
  }

  const result = lines.join("\n") + (line.length > 0 ? ` ${line}` : "");
  return result.trim();
};

export function makeAxesObject(x: string, y: string) {
  const g = new THREE.Object3D();
  g.add(makeLabels(x, y));
  g.add(axes.clone());
  return g;
}

function makeLabels(x: string, y: string) {
  const xMax = wrap(questions[x].max);
  const xMin = wrap(questions[x].min);
  const yMax = wrap(questions[y].max);
  const yMin = wrap(questions[y].min);

  const g = new THREE.Object3D();

  interface Label {
    position: [number, number, number];
    angle: number;
    relative: [number, number];
    text: string;
  }

  const LABEL_OFFSET = AXIS_TIP + 0.1;
  const labels: { [key: string]: Label } = {
    xMin: {
      position: [-LABEL_OFFSET, 0, 0],
      angle: -PI / 2,
      relative: [0, 1],
      text: xMin,
    },
    xMax: {
      position: [LABEL_OFFSET, 0, 0],
      angle: -PI / 2,
      relative: [1, 1],
      text: xMax,
    },
    yMin: {
      position: [0, -LABEL_OFFSET, 0],
      angle: 0,
      relative: [-1, 0],
      text: yMin,
    },
    yMax: {
      position: [0, LABEL_OFFSET, 0],
      angle: 0,
      relative: [-1, 1],
      text: yMax,
    },
  };

  Object.values(labels).forEach(label => {
    fontLoader.load("/assets/results2021/Open Sans Light_Regular.json", function (font) {
      const shapes = font.generateShapes(label.text, 0.05);

      const geometry = new THREE.ShapeGeometry(shapes);

      geometry.rotateZ(label.angle);

      geometry.computeBoundingBox();

      const mid: { [key: string]: number } = {
        x: (geometry.boundingBox.max.x - geometry.boundingBox.min.x) / 2,
        y: (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2,
      };

      const midVec = [mid.x * label.relative[0], mid.y * label.relative[1], 0].map((v, i) => v + label.position[i]);

      geometry.translate(...(midVec as [number, number, number]));

      const text = new THREE.Mesh(geometry, textMaterial);
      g.add(text);
    });
  });

  return g;
}
