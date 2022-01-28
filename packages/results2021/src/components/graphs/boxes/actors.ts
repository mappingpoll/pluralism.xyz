import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { color } from "../../../lib/style";
import { PickHelper } from "./utils";

export interface Actors {
  scene: THREE.Scene;
  selectionsGroup: THREE.Group;
  camera: THREE.OrthographicCamera;
  controls: OrbitControls;
  lights: (THREE.AmbientLight | THREE.DirectionalLight)[];
  renderer: THREE.WebGLRenderer;
  pickHelper: PickHelper;
  dispose: () => void;
}

const SQRT3 = Math.sqrt(3);
const SQRT8 = Math.sqrt(8); // 2x2 diagonal
export const FRUSTUM_SIZE = SQRT8 / 2;

export function makeActors(mount: HTMLCanvasElement): Actors {
  const w = mount.clientWidth;
  const h = mount.clientHeight;
  const aspectRatio = w / h;

  // Render
  const renderer = new THREE.WebGLRenderer({ canvas: mount, antialias: true });
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(color.bg);

  const selectionsGroup = new THREE.Group();
  scene.add(selectionsGroup);

  const pickHelper = new PickHelper(scene);

  const frustum = {
    left: FRUSTUM_SIZE * -aspectRatio,
    right: FRUSTUM_SIZE * aspectRatio,
    top: FRUSTUM_SIZE,
    bottom: -FRUSTUM_SIZE,
  };

  // Camera;
  const camera = new THREE.OrthographicCamera(frustum.left, frustum.right, frustum.top, frustum.bottom, 0, 2 * SQRT3);
  camera.position.set(-1, -1, 1.5);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  // Controls
  const controls = new OrbitControls(camera, mount);
  controls.target.set(0, 0, 0);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI / 2;
  controls.update();

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const light = new THREE.DirectionalLight(0xffffff, 1);
  const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
  light.position.set(-1, -0.5, 1);
  light2.position.set(1, 0.5, 1);
  const lights = [light, light2, ambientLight];

  const actors = {
    scene,
    selectionsGroup,
    camera,
    controls,
    lights,
    renderer,
    pickHelper,
    dispose() {
      this.scene.clear();
      this.selectionsGroup.clear();
      this.controls.dispose();
      this.lights.forEach(l => l.dispose());
    },
  };
  return actors;
}
