import * as THREE from "three";

export class PickHelper {
  raycaster: THREE.Raycaster;
  scene: THREE.Scene;
  user: string;
  hovered: THREE.Object3D | null;

  constructor(scene: THREE.Scene) {
    this.raycaster = new THREE.Raycaster();
    this.scene = scene;
    this.user = "";
    this.hovered = null;
  }

  restore() {
    if (this.hovered != null) {
      this.scene.remove(this.hovered);
      this.hovered = null;
      this.user = "";
    }
  }

  pick(normalizedPosition: { x: number; y: number }, meshes: THREE.Mesh[], camera: THREE.Camera) {
    this.raycaster.setFromCamera(normalizedPosition, camera);

    const hits = this.raycaster.intersectObjects(meshes, true);

    if (hits.length > 0) {
      const hit = hits[0].object;

      if (hit.type !== "Mesh") {
        this.restore();
        return;
      }

      if (this.hovered != null && hit.uuid === this.hovered.uuid) return;

      this.restore();

      this.user = hit.userData.user;
      this.hovered = hit;
      this.scene.add(this.hovered);
      // this.savedColor = this.pickedObject.material.emissive.getHex();
      // this.pickedObject.material.emissive.set(color.hoverBg);
    } else {
      this.restore();
    }
  }
}
