import * as THREE from "three";

export const material = {
  axis: new THREE.LineBasicMaterial({ color: 0x000000 }),
  axisTip: new THREE.MeshBasicMaterial({ color: 0x000000 }),
  graph: new THREE.MeshBasicMaterial({ vertexColors: true }),
  hover: new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.5 }),
  selection: new THREE.MeshBasicMaterial({ vertexColors: true }),
};

function getColorAttr(color: number) {
  const r = (color & 0xff0000) >> 16;
  const g = (color & 0x00ff00) >> 8;
  const b = color & 0x0000ff;
  const rgb = [r, g, b];

  const colors = new Uint8Array(12).map((_, i) => rgb[i % 3]);

  return new THREE.BufferAttribute(colors, 3, true);
}
export const planeColor = {
  base: {
    top: getColorAttr(0x7f7f7f),
    front: getColorAttr(0x1f1f1f),
    back: getColorAttr(0xdfdfdf),
    left: getColorAttr(0xc3c3c3),
    right: getColorAttr(0x2f2f2f),
  },
  hl: {
    top: getColorAttr(0xff0000),
    front: getColorAttr(0xcc0000),
    back: getColorAttr(0xff7d7d),
    left: getColorAttr(0xff6666),
    right: getColorAttr(0xdc0101),
  },
};
