import * as THREE from "three";
import { UserMap } from "./meshes";

export class PickHelper {
  raycaster: THREE.Raycaster;
  scene: THREE.Scene;
  userMeshes: THREE.Mesh[];
  userMap: UserMap;
  user = "";
  hit: THREE.Object3D | null = null;

  constructor(scene: THREE.Scene, meshes: THREE.Mesh[], userMap: UserMap) {
    this.raycaster = new THREE.Raycaster();
    this.scene = scene;
    this.userMeshes = meshes;
    this.userMap = userMap;
    this.hit = null;
  }

  restore() {
    if (this.hit != null) {
      this.scene.remove(this.hit);
      this.hit = null;
      this.user = "";
    }
  }

  pick(normalizedPosition: { x: number; y: number }, camera: THREE.Camera) {
    this.raycaster.setFromCamera(normalizedPosition, camera);

    const hits = this.raycaster.intersectObjects(this.userMeshes, false);

    if (hits.length > 0) {
      const hit = hits[0].object;

      if (hit.type !== "Mesh") {
        this.restore();
        return;
      }

      if (this.hit != null && hit.uuid === this.hit.uuid) return;

      this.restore();

      const { user } = hit.userData;
      console.log(user);
      this.hit = hit;
      this.user = user;
      this.scene.add(this.hit);
    } else {
      this.restore();
    }
  }
}
