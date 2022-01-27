import { css } from "@emotion/css";
import { html } from "htm/preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { data2Rectangles, intersectRectangles, Rectangle } from "../../lib/data";
import { ActionType } from "../../lib/reducer";
import { color } from "../../lib/style";
import { material } from "../../lib/three_elements";
import { isClientUser } from "../../lib/user";
import { makeAxesObject } from "./Axes";
import { GraphProps } from "./types";
import { PickHelper } from "./utils";

const SQRT3 = Math.sqrt(3);

const styles = css`
  background-color: ${color.bg};
  width: 100%;
  height: 100%;
  max-height: 90vh;
  display: block;

  @media only screen and (max-device-width: 430px) {
    height: 90vw;
    max-height: 100vw;
  }
`;

export function Boxes({ data, reducer, pair }: GraphProps) {
  const canvas = useRef<HTMLCanvasElement>();
  const [mount, setMount] = useState<HTMLCanvasElement>();
  const [actors, setActors] = useState<{
    scene: THREE.Scene;
    selectionsGroup: THREE.Group;
    camera: THREE.OrthographicCamera;
    controls: OrbitControls;
    lights: (THREE.AmbientLight | THREE.DirectionalLight)[];
    renderer: THREE.WebGLRenderer;
    pickHelper: PickHelper;
    dispose: () => void;
  } | null>(null);
  const [readyForRender, setReadyForRender] = useState(false);

  useEffect(() => {
    setMount(canvas.current as HTMLCanvasElement);
  }, []);

  // GEOMETRIES
  const meshes = useMemo(() => {
    const rectangles = intersectRectangles(data2Rectangles(data));
    // const maxLayers = rectangles.reduce((max, r) => (r.layer > max ? r.layer : max), 0);
    const thickness = Rectangle.MIN_LENGTH;

    const boxGeometries = [];
    const hlGeometries = [];
    const hover = [];
    const selection = [];
    let user;

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

      hlBox.userData = { user: r.user };

      hlGeometries.push(hlBox);
    }

    const mergedGeometry = mergeBufferGeometries(boxGeometries, false);
    const merged = new THREE.Mesh(mergedGeometry, material.base);

    const mergedUsers: string[] = [];

    for (const g of hlGeometries) {
      const u = g.userData.user;

      if (mergedUsers.includes(u)) continue;

      mergedUsers.push(u);

      const toMerge: THREE.BoxGeometry[] = [];

      hlGeometries.forEach(h => {
        if (h.userData.user === u) {
          toMerge.push(h);
        }
      });

      const merged = mergeBufferGeometries(toMerge, false);

      const hoverMesh = new THREE.Mesh(merged, material.hover);
      const selectionMesh = new THREE.Mesh(merged, material.selection);

      const userData = { user: u };
      hoverMesh.userData = userData;
      selectionMesh.userData = userData;

      hover.push(hoverMesh);
      selection.push(selectionMesh);

      if (isClientUser(u)) {
        const userMesh = new THREE.Mesh(merged, material.user);
        userMesh.userData = userData;
        user = userMesh;
      }
    }

    const axes = makeAxesObject(pair.x, pair.y);

    return {
      hover,
      selection,
      user,
      merged,
      axes,
      dispose() {
        const dispose = box => box.dispose();
        this.hover.forEach(dispose);
        this.selection.forEach(dispose);
        if (this.user != null) this.user.geometry.dispose();
        this.merged.geometry.dispose();
      },
    };
  }, [pair.x, pair.y]);

  // ACTORS
  useEffect(() => {
    if (mount == null) return;
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    const viewportRatio = w / h;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(color.bg);

    const selectionsGroup = new THREE.Group();
    scene.add(selectionsGroup);

    const pickHelper = new PickHelper(scene);

    const clipSpace = {
      left: -Math.SQRT2 - Rectangle.MIN_LENGTH,
      right: Math.SQRT2 + Rectangle.MIN_LENGTH,
      top: Math.SQRT2,
      bottom: -Math.SQRT2,
    };

    // Camera;
    const camera = new THREE.OrthographicCamera(
      clipSpace.left * viewportRatio,
      clipSpace.right * viewportRatio,
      clipSpace.top,
      clipSpace.bottom,
      0,
      2 * SQRT3,
    );
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

    // Render
    const renderer = new THREE.WebGLRenderer({ canvas: mount, antialias: true });
    renderer.setClearColor(0xffffff);
    renderer.setSize(w, h);

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
        this.controls.dispose();
        this.lights.forEach(l => l.dispose());
        this.renderer.dispose();
      },
    };
    setActors(actors);
    setReadyForRender(true);
  }, [mount, meshes]);

  // UPDATE SELECTION
  useEffect(() => {
    if (!readyForRender || actors == null) return;

    actors.selectionsGroup.clear();
    meshes.selection.forEach(box => {
      if (reducer.state.selectedUsers.includes(box.userData.user)) {
        actors.selectionsGroup.add(box);
      }
    });
    actors.renderer.render(actors.scene, actors.camera);
  }, [meshes.selection, reducer.state.selectedUsers]);

  // SCENE

  useEffect(() => {
    if (!readyForRender || actors == null || mount == null) return;
    const { scene, camera, controls, lights, renderer, pickHelper } = actors;

    scene.add(...lights);
    scene.add(meshes.merged);
    if (meshes.user != null) scene.add(meshes.user);
    scene.add(actors.selectionsGroup);
    scene.add(meshes.axes);

    function render() {
      renderer.render(scene, camera);
    }
    render();

    const pickPosition = { x: 0, y: 0 };
    clearPickPosition();

    function setPickPosition(event: MouseEvent) {
      const rect = mount.getBoundingClientRect();
      pickPosition.x = ((event.clientX - rect.left) / mount.clientWidth) * 2 - 1;
      pickPosition.y = ((event.clientY - rect.top) / mount.clientHeight) * -2 + 1; // note we flip Y
      pickHelper.pick(pickPosition, meshes.hover, camera);
      render();
    }

    function clearPickPosition() {
      pickPosition.x = -100000;
      pickPosition.y = -100000;
    }

    let timer = Date.now();
    const handlePointerDown = () => {
      timer = Date.now();
    };

    function handlePointerUp(event: MouseEvent) {
      const diff = Date.now() - timer;
      if (diff < 100) {
        if (pickHelper.user) {
          if (event.shiftKey) {
            reducer.dispatch({ type: ActionType.SelectAdd, payload: pickHelper.user });
          } else {
            reducer.dispatch({ type: ActionType.SelectOne, payload: pickHelper.user });
          }
        } else {
          reducer.dispatch({ type: ActionType.SelectNone });
        }
      }
      timer = 0;
    }

    controls.addEventListener("change", render);
    mount.addEventListener("mousemove", setPickPosition);
    mount.addEventListener("mouseout", clearPickPosition);
    mount.addEventListener("mouseleave", clearPickPosition);
    mount.addEventListener("pointerdown", handlePointerDown);
    mount.addEventListener("pointerup", handlePointerUp);

    return () => {
      meshes.merged.geometry.dispose();
      renderer.dispose();
      controls.removeEventListener("change", render);
      mount.removeEventListener("mousemove", setPickPosition);
      mount.removeEventListener("mouseout", clearPickPosition);
      mount.removeEventListener("mouseleave", clearPickPosition);
      mount.removeEventListener("pointerdown", handlePointerDown);
      mount.removeEventListener("pointerup", handlePointerUp);
    };
  }, [actors]);

  return html`<canvas ref=${canvas} class=${styles}></canvas>`;
}
