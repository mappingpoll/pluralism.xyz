import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

import { questions } from "./questions";
import { mapPairToXYData, data2Rectangles, intersectRectangles } from "./data";

// Prepare pairwise combinations
const data: { [key: string]: any } = {};

const qs = Object.keys(questions);

qs.forEach(a => {
  qs.forEach(b => {
    // rectangles
    const rectangles = intersectRectangles(data2Rectangles(mapPairToXYData({ x: a, y: b })));
    console.log(rectangles.length);
    console.log(a, b);

    const maxLayers = rectangles.reduce((max, r) => (r.layer > max ? r.layer : max), 0);

    const thickness = 1 / (maxLayers + 1);

    const boxes = [];
    const hoverBoxes = [];

    for (const r of rectangles) {
      const dimensions = [r.width, r.height, thickness];
      const box = new THREE.BoxGeometry(...dimensions);
      const posMat = new THREE.Matrix4();
      posMat.makeTranslation(r.x0, r.y0, r.layer * dimensions[2]);
      box.applyMatrix4(posMat);
      boxes.push(box);

      const hoverDimensions = dimensions.map(d => d + 0.02);
      const hoverBox = new THREE.BoxGeometry(...hoverDimensions);
      hoverBox.userData = { user: r.user };
      posMat.makeTranslation(r.x0, r.y0, r.layer * hoverDimensions[2]);
      hoverBox.applyMatrix4(posMat);
      hoverBoxes.push(hoverBox);
    }

    const mergedGeometry = mergeBufferGeometries(boxes, false);
    data[`${a}-${b}`] = { individual: hoverBoxes, merged: mergedGeometry };
  });
});
// json

console.log(data["2-3"].individual[0].toJSON());
// boxes.forEach(({ individual, merged }) => {
//   individual.forEach(box => {});
// });
// meshColor.set(getFill(reducer.state, r.user));
//     const rgb = meshColor.toArray().map(v => v * 255);
//
//     const colors = new Uint8Array(3 * 24);
//
//     colors.forEach((_, i) => (colors[i] = rgb[i % 3]));
//
//     const colorAttr = new THREE.BufferAttribute(colors, 3, true);
//
//     box.setAttribute("color", colorAttr);
//     geometries.push(box);
