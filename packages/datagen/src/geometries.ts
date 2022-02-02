import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

import { Pair, questions } from "./questions";
import { Rectangle, mapPairToXYData, data2Rectangles, intersectRectangles } from "./data";

import { planeColor } from "./materials";
import { makeAxesObject } from "./axes";

export interface Geometries {
  highlight: THREE.BufferGeometry[];
  userMesh: THREE.BufferGeometry | undefined;
  merged: THREE.BufferGeometry;
  axes: THREE.Object3D<THREE.Event>;
}

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

const EXTRUSION = 0.001;

export function computeGeometries(pair: Pair, rectangles: Rectangle[]): Geometries {
  const thickness = Rectangle.MIN_LENGTH;

  const geometries = [];
  const hlGeometries = [];
  const highlight = [];
  let userMesh;

  for (const r of rectangles) {
    const dimensions: Vec3 = { x: r.width, y: r.height, z: thickness };
    const hlDimensions: Vec3 = { ...dimensions };
    Object.keys(hlDimensions).forEach((k: string) => (hlDimensions[k as keyof Vec3] += EXTRUSION * 2));

    const midPoint: Vec3 = {
      x: r.x0 + dimensions.x / 2,
      y: r.y0 + dimensions.y / 2,
      z: r.layer * dimensions.z + dimensions.z / 2,
    };

    // WALLS
    //
    let planeTop, planeFront, planeBack, planeLeft, planeRight;
    let hlPlaneTop, hlPlaneFront, hlPlaneBack, hlPlaneLeft, hlPlaneRight;
    {
      // top
      planeTop = new THREE.PlaneGeometry(r.width, r.height);
      planeTop.translate(midPoint.x, midPoint.y, midPoint.z + dimensions.z / 2);
      planeTop.setAttribute("color", planeColor.base.top);

      hlPlaneTop = new THREE.PlaneGeometry(hlDimensions.x, hlDimensions.y);
      hlPlaneTop.translate(midPoint.x, midPoint.y, midPoint.z + dimensions.z / 2 + EXTRUSION);
      hlPlaneTop.setAttribute("color", planeColor.hl.top);
    }

    {
      // left & right
      planeLeft = new THREE.PlaneGeometry(dimensions.z, dimensions.y);
      planeRight = planeLeft.clone();
      planeLeft.rotateY(-Math.PI / 2);
      planeRight.rotateY(Math.PI / 2);
      planeLeft.translate(r.x0, midPoint.y, midPoint.z);
      planeRight.translate(r.x1, midPoint.y, midPoint.z);
      planeLeft.setAttribute("color", planeColor.base.left);
      planeRight.setAttribute("color", planeColor.base.right);

      hlPlaneLeft = new THREE.PlaneGeometry(hlDimensions.z, hlDimensions.y);
      hlPlaneRight = hlPlaneLeft.clone();
      hlPlaneLeft.rotateY(-Math.PI / 2);
      hlPlaneRight.rotateY(Math.PI / 2);
      hlPlaneLeft.translate(r.x0 - EXTRUSION, midPoint.y, midPoint.z);
      hlPlaneRight.translate(r.x1 + EXTRUSION, midPoint.y, midPoint.z);
      hlPlaneLeft.setAttribute("color", planeColor.hl.left);
      hlPlaneRight.setAttribute("color", planeColor.hl.right);
    }

    {
      // front & back
      planeFront = new THREE.PlaneGeometry(dimensions.x, dimensions.z);
      planeBack = planeFront.clone();
      planeFront.rotateX(Math.PI / 2);
      planeBack.rotateX(-Math.PI / 2);
      planeFront.translate(midPoint.x, r.y0, midPoint.z);
      planeBack.translate(midPoint.x, r.y1, midPoint.z);
      planeFront.setAttribute("color", planeColor.base.front);
      planeBack.setAttribute("color", planeColor.base.back);

      hlPlaneFront = new THREE.PlaneGeometry(hlDimensions.x, hlDimensions.z);
      hlPlaneBack = hlPlaneFront.clone();
      hlPlaneFront.rotateX(Math.PI / 2);
      hlPlaneBack.rotateX(-Math.PI / 2);
      hlPlaneFront.translate(midPoint.x, r.y0 - EXTRUSION, midPoint.z);
      hlPlaneBack.translate(midPoint.x, r.y1 + EXTRUSION, midPoint.z);
      hlPlaneFront.setAttribute("color", planeColor.hl.front);
      hlPlaneBack.setAttribute("color", planeColor.hl.back);
    }
    geometries.push(planeTop, planeFront, planeBack, planeLeft, planeRight);

    const hlGeometry = mergeBufferGeometries([hlPlaneTop, hlPlaneFront, hlPlaneBack, hlPlaneLeft, hlPlaneRight], false);
    hlGeometry.userData = { users: r.users };
    hlGeometries.push(hlGeometry);
  }

  const merged = mergeBufferGeometries(geometries, false);

  // merge geometry by user
  for (const g of hlGeometries.sort((a, b) => b.userData.users.length - a.userData.users.length)) {
    const { users } = g.userData;

    const toMerge: THREE.BufferGeometry[] = [g];

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

    merged.userData = { users };

    highlight.push(merged);
  }

  const axes = makeAxesObject(pair.x, pair.y);

  return {
    highlight,
    userMesh,
    merged,
    axes,
  };
}
