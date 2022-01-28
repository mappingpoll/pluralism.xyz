import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

import { material } from "./materials";
import { Rectangle } from "./data";
import { isClientUser } from "../../../lib/user";
import { makeAxesObject } from "./axes";
import { Pair } from "../../../lib/questions";

export interface Meshes {
  hover: THREE.Mesh<THREE.BufferGeometry, THREE.MeshLambertMaterial>[];
  selection: THREE.Mesh<THREE.BufferGeometry, THREE.MeshLambertMaterial>[];
  userMesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshLambertMaterial> | undefined;
  merged: THREE.Mesh<THREE.BufferGeometry, THREE.MeshLambertMaterial>;
  axes: THREE.Object3D<THREE.Event>;
  dispose(): void;
}

export function computeMeshes(pair: Pair, rectangles: Rectangle[]): Meshes {
  const thickness = Rectangle.MIN_LENGTH;

  const boxGeometries = [];
  const hlGeometries = [];
  const hover = [];
  const selection = [];
  let userMesh;

  for (const r of rectangles) {
    const dimensions = [r.width, r.height, thickness];
    const box = new THREE.BoxGeometry(...dimensions);
    const posMat = new THREE.Matrix4();
    posMat.makeTranslation(
      r.x0 + dimensions[0] / 2,
      r.y0 + dimensions[1] / 2,
      r.layer * dimensions[2] + dimensions[2] / 2,
    );
    box.applyMatrix4(posMat);
    boxGeometries.push(box);

    const hlDimensions = dimensions.map(d => d + 0.002);
    const hlBox = new THREE.BoxGeometry(...hlDimensions);

    hlBox.applyMatrix4(posMat);

    hlBox.userData = { users: [...r.users] };

    hlGeometries.push(hlBox);
  }

  const mergedGeometry = mergeBufferGeometries(boxGeometries, false);
  const merged = new THREE.Mesh(mergedGeometry, material.base);

  // merge geometry by user

  // sort geos by most to least users
  const sortedGeos = [...hlGeometries].sort((a, b) => b.userData.users.length - a.userData.users.length);

  for (const g of sortedGeos) {
    const { users } = g.userData;

    const toMerge: THREE.BoxGeometry[] = [g];

    // find geometries that include ALL of the current geo's users
    hlGeometries.forEach(h => {
      if (h.uuid === g.uuid) return; // skip current geo

      const { users: hlUsers } = h.userData;

      if (hlUsers.length < users.length) return; // skip geos with less intersections

      if (users.every((u: string) => hlUsers.includes(u))) {
        toMerge.push(h);
      }
    });

    const merged = mergeBufferGeometries(toMerge, false);

    const hoverMesh = new THREE.Mesh(merged, material.hover);
    const selectionMesh = new THREE.Mesh(merged, material.selection);

    const userData = { users };

    hoverMesh.userData = userData;
    selectionMesh.userData = userData;

    hover.push(hoverMesh);
    selection.push(selectionMesh);

    if (users.some(isClientUser)) {
      userMesh = new THREE.Mesh(merged, material.user);
      userMesh.userData = userData;
    }
  }

  const axes = makeAxesObject(pair.x, pair.y);

  return {
    hover,
    selection,
    userMesh,
    merged,
    axes,
    dispose() {
      this.hover.forEach(h => h.geometry.dispose());
      this.selection.forEach(s => s.geometry.dispose());
      if (this.userMesh != null) this.userMesh.geometry.dispose();
      this.merged.geometry.dispose();
    },
  };
}
