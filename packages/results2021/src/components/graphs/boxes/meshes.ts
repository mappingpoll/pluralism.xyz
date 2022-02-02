import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

import { material, planeColor } from "./materials";
import { Rectangle } from "./data";
import { makeAxesObject } from "./axes";
import { Pair } from "../../../lib/questions";

export interface UserData extends Record<string, any> {
  user: string;
  users: string[];
}

export interface SelectionMap {
  [uuid: string]: THREE.Mesh;
}

export interface UserMap {
  [user: string]: THREE.Mesh;
}

export interface Meshes {
  graph: THREE.Mesh;
  hover: THREE.Mesh[];
  selection: THREE.Mesh[];
  axes: THREE.Object3D<THREE.Event>;
  userMap: UserMap;
  // selectionMap: SelectionMap;
  dispose(): void;
}

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

const EXTRUSION = 0.001;
const THICKNESS = Rectangle.MIN_LENGTH;

export function computeMeshes(pair: Pair, rectangles: Rectangle[]): Meshes {
  const { graphGeometries, hoverGeometries } = makeGeometries(rectangles);

  const graphMesh = makeGraphMesh(graphGeometries);

  const { userMeshes, selectionMeshes } = makeHoverMeshes(hoverGeometries);

  const userMap = makeUserMap(selectionMeshes);

  const axes = makeAxesObject(pair.x, pair.y);

  return {
    graph: graphMesh,
    hover: userMeshes,
    selection: selectionMeshes,
    userMap,
    // selectionMap,
    axes,
    dispose() {
      this.graph.geometry.dispose();
      this.hover.forEach(h => h.geometry.dispose());
      // Object.values(selectionMap).forEach(s => s?.geometry.dispose());
    },
  };
}

function makePlanes(rectangle: Rectangle): { base: THREE.PlaneGeometry[]; hover: THREE.PlaneGeometry[] } {
  const { width, height, x0, x1, y0, y1, layer } = rectangle;

  const dimensions: Vec3 = { x: width, y: height, z: THICKNESS };

  const hlDimensions: Vec3 = { ...dimensions };

  Object.keys(hlDimensions).forEach((k: string) => (hlDimensions[k as keyof Vec3] += EXTRUSION * 2));

  const midPoint: Vec3 = {
    x: x0 + dimensions.x / 2,
    y: y0 + dimensions.y / 2,
    z: layer * dimensions.z + dimensions.z / 2,
  };

  // WALLS
  //
  let top, front, back, left, right;
  let hlTop, hlFront, hlBack, hlLeft, hlRight;
  {
    // top
    top = new THREE.PlaneGeometry(width, height);
    top.translate(midPoint.x, midPoint.y, midPoint.z + dimensions.z / 2);
    top.setAttribute("color", planeColor.base.top);

    hlTop = new THREE.PlaneGeometry(hlDimensions.x, hlDimensions.y);
    hlTop.translate(midPoint.x, midPoint.y, midPoint.z + dimensions.z / 2 + EXTRUSION);
    hlTop.setAttribute("color", planeColor.hl.top);
  }

  {
    // left & right
    left = new THREE.PlaneGeometry(dimensions.z, dimensions.y);
    right = left.clone() as THREE.PlaneGeometry;
    left.rotateY(-Math.PI / 2);
    right.rotateY(Math.PI / 2);
    left.translate(x0, midPoint.y, midPoint.z);
    right.translate(x1, midPoint.y, midPoint.z);
    left.setAttribute("color", planeColor.base.left);
    right.setAttribute("color", planeColor.base.right);

    hlLeft = new THREE.PlaneGeometry(hlDimensions.z, hlDimensions.y);
    hlRight = hlLeft.clone() as THREE.PlaneGeometry;
    hlLeft.rotateY(-Math.PI / 2);
    hlRight.rotateY(Math.PI / 2);
    hlLeft.translate(x0 - EXTRUSION, midPoint.y, midPoint.z);
    hlRight.translate(x1 + EXTRUSION, midPoint.y, midPoint.z);
    hlLeft.setAttribute("color", planeColor.hl.left);
    hlRight.setAttribute("color", planeColor.hl.right);
  }

  {
    // front & back
    front = new THREE.PlaneGeometry(dimensions.x, dimensions.z);
    back = front.clone() as THREE.PlaneGeometry;
    front.rotateX(Math.PI / 2);
    back.rotateX(-Math.PI / 2);
    front.translate(midPoint.x, y0, midPoint.z);
    back.translate(midPoint.x, y1, midPoint.z);
    front.setAttribute("color", planeColor.base.front);
    back.setAttribute("color", planeColor.base.back);

    hlFront = new THREE.PlaneGeometry(hlDimensions.x, hlDimensions.z);
    hlBack = hlFront.clone() as THREE.PlaneGeometry;
    hlFront.rotateX(Math.PI / 2);
    hlBack.rotateX(-Math.PI / 2);
    hlFront.translate(midPoint.x, y0 - EXTRUSION, midPoint.z);
    hlBack.translate(midPoint.x, y1 + EXTRUSION, midPoint.z);
    hlFront.setAttribute("color", planeColor.hl.front);
    hlBack.setAttribute("color", planeColor.hl.back);
  }

  return {
    base: [top, front, back, left, right],
    hover: [hlTop, hlFront, hlBack, hlLeft, hlRight],
  };
}

function makeBoxGeometries(rectangle: Rectangle) {
  const planes = makePlanes(rectangle);

  const hoverGeometry = mergeBufferGeometries(planes.hover);

  hoverGeometry.userData = { user: rectangle.user, users: rectangle.users };

  return {
    graphPlanes: planes.base,
    hoverGeometry,
  };
}

function makeGeometries(rectangles: Rectangle[]) {
  const graphGeometries: THREE.PlaneGeometry[] = [];
  const hoverGeometries: THREE.BufferGeometry[] = [];

  for (const rectangle of rectangles) {
    const { graphPlanes, hoverGeometry } = makeBoxGeometries(rectangle);
    graphGeometries.push(...graphPlanes);
    hoverGeometries.push(hoverGeometry);
  }

  return { graphGeometries, hoverGeometries };
}

function makeMeshFromGeometries(
  geometries: THREE.BufferGeometry | THREE.BufferGeometry[],
  material: THREE.Material,
  userData: any = {},
): THREE.Mesh {
  let mesh;
  if (geometries instanceof Array) {
    const merged = mergeBufferGeometries(geometries, false);
    mesh = new THREE.Mesh(merged, material);
  } else {
    mesh = new THREE.Mesh(geometries, material);
  }
  mesh.userData = { ...userData };
  return mesh;
}

function makeGraphMesh(geometries: THREE.BufferGeometry[]) {
  return makeMeshFromGeometries(geometries, material.graph);
}

function makeHoverMeshes(geometries: THREE.BufferGeometry[]) {
  const userMeshes = [];
  const selectionMeshes = [];

  for (const geo of geometries) {
    if (geo.userData.user) {
      const mesh = makeMeshFromGeometries(geo, material.hover, { ...geo.userData });
      userMeshes.push(mesh.clone() as THREE.Mesh);
    }

    const mesh = makeMeshFromGeometries(geo, material.selection, { ...geo.userData });
    selectionMeshes.push(mesh);
  }
  return { userMeshes, selectionMeshes };
}

export function isPartOfSelection<T extends Record<string, any>>(selected: string[], { user, users }: T) {
  if (user && selected.includes(user)) {
    return true;
  }
  if (selected.every(s => users.includes(s))) return true;
  return false;
}

function makeUserMap(hoverMeshed: THREE.Mesh[]): UserMap {
  const userMap: UserMap = {};

  for (const mesh of hoverMeshed) {
    if (mesh.userData.user) {
      userMap[mesh.userData.user] = mesh;
    }
  }

  return userMap;
}
