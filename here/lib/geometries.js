"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = __importStar(require("three"));
const questions_1 = require("./questions");
const data_1 = require("./data");
const BufferGeometryUtils_1 = require("three/examples/jsm/utils/BufferGeometryUtils");
// Prepare pairwise combinations
const data = {};
const qs = Object.keys(questions_1.questions);
qs.forEach(a => {
    qs.forEach(b => {
        data[`${a}-${b}`] = (0, data_1.mapPairToXYData)({ x: a, y: b });
    });
});
// rectangles
const rectanglePairs = Object.values(data).map(d => (0, data_1.intersectRectangles)((0, data_1.data2Rectangles)(d)));
// boxes
const boxes = Object.values(rectanglePairs).map(rectangles => {
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
    const mergedGeometry = (0, BufferGeometryUtils_1.mergeBufferGeometries)(boxes, false);
    return { individual: hoverBoxes, merged: mergedGeometry };
});
// json
console.log(boxes[0].individual[0].toJSON());
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
