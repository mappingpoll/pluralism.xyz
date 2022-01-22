import { css } from "@emotion/css";
import { html } from "htm/preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { VIEWBOX } from "../../lib/constants";
import { XYData } from "../../lib/data";
import { color, getFill } from "../../lib/style";
import { Rectangle } from "./dataTransform";
import { GraphProps } from "./types";

const SQRT3 = Math.sqrt(3);

const styles = css`
  background-color: ${color.bg};
  width: 100%;
  height: 100%;
  display: block;
`;

export function Boxes({ data, reducer, pair }: GraphProps) {
  const boxes = useMemo(() => {
    const rectangles = intersectRectangles(data2Rectangles(data));
    const maxLayers = rectangles.reduce((max, r) => (r.layer > max ? r.layer : max), 0);
    const thickness = 1 / maxLayers;

    const geometries = [];
    const color = new THREE.Color();
    for (const r of rectangles) {
      const box = new THREE.BoxGeometry(r.width, thickness, r.height);
      const posMat = new THREE.Matrix4();
      posMat.makeTranslation(r.x0 + r.width / 2, r.layer * thickness + thickness / 2, r.y0 + r.height / 2);
      box.applyMatrix4(posMat);

      color.set(getFill(reducer.state, r.user));
      const rgb = color.toArray().map(v => v * 255);

      const numVerts = box.getAttribute("position").count;
      const colors = new Uint8Array(3 * numVerts);

      colors.forEach((_, i) => (colors[i] = rgb[i % 3]));

      const colorAttr = new THREE.BufferAttribute(colors, 3, true);

      box.setAttribute("color", colorAttr);
      geometries.push(box);
    }
    const mergedGeometry = mergeBufferGeometries(geometries);
    const boxMaterial = new THREE.MeshPhongMaterial({ vertexColors: true });
    const mesh = new THREE.Mesh(mergedGeometry, boxMaterial);
    return mesh;
  }, [pair.x, pair.y]);

  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const w = VIEWBOX[2];
    const h = VIEWBOX[3];

    const scene = new THREE.Scene();

    // Camera;
    const camera = new THREE.OrthographicCamera(
      -Math.SQRT2 - Rectangle.MIN_LENGTH,
      Math.SQRT2 + Rectangle.MIN_LENGTH,
      SQRT3,
      -Math.SQRT2 - Rectangle.MIN_LENGTH,
      0,
      2 * SQRT3,
    );
    camera.position.set(1, 1, 1);

    const controls = new OrbitControls(camera, canvas.current as HTMLCanvasElement);
    controls.target.set(0, 0, 0);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minAzimuthAngle = 0;
    controls.maxAzimuthAngle = Math.PI / 2;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;
    controls.update();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(-1, 2, 5);
    scene.add(light);

    // Boxes
    scene.add(boxes);

    // Axes
    const axisMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const farCorner = new THREE.Vector3(-1, 0, -1);
    const yAxisGeo = new THREE.BufferGeometry().setFromPoints([farCorner, new THREE.Vector3(-1, 1, -1)]);
    const xAxisGeo = new THREE.BufferGeometry().setFromPoints([farCorner, new THREE.Vector3(1, 0, -1)]);
    const zAxisGeo = new THREE.BufferGeometry().setFromPoints([farCorner, new THREE.Vector3(-1, 0, 1)]);
    const xAxis = new THREE.Line(xAxisGeo, axisMaterial);
    const yAxis = new THREE.Line(yAxisGeo, axisMaterial);
    const zAxis = new THREE.Line(zAxisGeo, axisMaterial);
    scene.add(xAxis, yAxis, zAxis);

    // Render
    const renderer = new THREE.WebGL1Renderer({ canvas: canvas.current as HTMLCanvasElement, antialias: true });
    renderer.setClearColor(color.bg);
    renderer.setSize(w, h);

    function render() {
      renderer.render(scene, camera);
    }
    render();

    controls.addEventListener("change", render);

    return () => {
      scene.remove(light, boxes, xAxis, yAxis, zAxis);
      controls.dispose();
      light.dispose();
      boxes.geometry.dispose();
      axisMaterial.dispose();
      xAxisGeo.dispose();
      yAxisGeo.dispose();
      zAxisGeo.dispose();
    };
  }, [boxes]);

  return html`<canvas ref=${canvas} class=${styles}></canvas>`;
}

class UserRectangle extends Rectangle {
  user = "";
  static intersection(a: UserRectangle, b: UserRectangle): UserRectangle {
    const r = Rectangle.intersection(a, b) as UserRectangle;
    r.user = b.user;
    return r;
  }
}

function data2Rectangles(data: XYData): UserRectangle[] {
  const rectangles = [];
  for (const d of data) {
    const r = new Rectangle(d) as UserRectangle;
    r.user = d.user;
    rectangles.push(r);
  }
  return rectangles.sort((a, b) => a.area - b.area);
}

function intersectRectangles(rects: UserRectangle[]): UserRectangle[] {
  const stack: UserRectangle[] = [];

  for (const r of rects) {
    const ontoStack = [];
    for (const s of stack) {
      if (UserRectangle.doOverlap(r, s)) ontoStack.push(UserRectangle.intersection(r, s));
    }
    stack.push(r, ...ontoStack);
  }
  return stack;
}
