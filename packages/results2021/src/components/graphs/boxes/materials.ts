import * as THREE from "three";
import { color } from "../../../lib/style";

export const material = {
  axis: new THREE.LineBasicMaterial({ color: 0x000000 }),
  axisTip: new THREE.MeshBasicMaterial({ color: 0x000000 }),
  base: new THREE.MeshLambertMaterial({ color: color.lightGrey }),
  hover: new THREE.MeshLambertMaterial({ color: color.hoverBg, transparent: true, opacity: 0.3 }),
  selection: new THREE.MeshLambertMaterial({ color: color.selectionBg, transparent: true, opacity: 0.05 }),
  user: new THREE.MeshLambertMaterial({ color: color.userBg, transparent: true, opacity: 0.3 }),
  box: {
    top: new THREE.MeshLambertMaterial({ color: 0x7f7f7f }),
    left: new THREE.MeshLambertMaterial({ color: 0xc3c3c3 }),
    front: new THREE.MeshLambertMaterial({ color: 0x1f1f1f }),
    right: new THREE.MeshLambertMaterial({ color: 0xdfdfdf }),
    back: new THREE.MeshLambertMaterial({ color: 0x2f2f2f }),
  },
};
