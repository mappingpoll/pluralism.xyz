import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { material } from "./materials";
import { questions } from "./questions";

// 3D
const AXIS_TIP = 1.1;

const xAxisGeo = new THREE.BufferGeometry().setFromPoints([
  // new THREE.Vector3(-AXIS_TIP, 0, -0.025),
  new THREE.Vector3(-AXIS_TIP, 0, 0),
  new THREE.Vector3(AXIS_TIP, 0, 0),
  // new THREE.Vector3(AXIS_TIP, 0, 0.025),
]);

const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
  // new THREE.Vector3(0, -AXIS_TIP, -0.025),
  new THREE.Vector3(0, -AXIS_TIP, 0),
  new THREE.Vector3(0, AXIS_TIP, 0),
  // new THREE.Vector3(0, AXIS_TIP, 0.025),
]);

const zAxisGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0.5)]);

const x = new THREE.Line(xAxisGeo, material.axis);
const y = new THREE.Line(yAxisGeo, material.axis);
const z = new THREE.Line(zAxisGeo, material.axis);

const axes = new THREE.Object3D();
axes.add(x, y, z);

function makeTips() {
  const tipGeo = new THREE.ConeGeometry(0.015, 0.05, 4);
  const g = new THREE.Object3D();

  const transforms: Array<{ angle: number; tip: [number, number, number] }> = [
    {
      angle: 0,
      tip: [0, AXIS_TIP, 0],
    },
    {
      angle: PI / 2,
      tip: [-AXIS_TIP, 0, 0],
    },
    {
      angle: PI,
      tip: [0, -AXIS_TIP, 0],
    },
    {
      angle: -PI / 2,
      tip: [AXIS_TIP, 0, 0],
    },
  ];

  transforms.forEach(({ angle, tip }) => {
    const geo = tipGeo.clone();
    geo.rotateZ(angle);
    geo.translate(...tip);
    const cone = new THREE.Mesh(geo, material.axisTip);
    g.add(cone);
  });

  return g;
}

const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
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
  g.add(makeTips());
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

      if (geometry.boundingBox == null) return;

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
