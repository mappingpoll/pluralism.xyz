import * as THREE from "three";
import { color } from "./style";

const hlOpacity = 0.5;
export const material = {
  base: new THREE.MeshLambertMaterial({ color: color.lightGrey }),
  hover: new THREE.MeshLambertMaterial({ color: color.hoverBg, transparent: true, opacity: hlOpacity }),
  selection: new THREE.MeshLambertMaterial({ color: color.selectionBg, transparent: true, opacity: hlOpacity }),
  user: new THREE.MeshLambertMaterial({ color: color.userBg, transparent: true, opacity: hlOpacity }),
};
