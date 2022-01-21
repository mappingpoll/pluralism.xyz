import { css } from "@emotion/css";
import { html } from "htm/preact";
import { useEffect, useRef } from "preact/hooks";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { VIEWBOX } from "../../lib/constants";
import { color } from "../../lib/style";
import { GraphProps } from "./types";

const styles = css`
  background-color: ${color.bg};
  width: 100%;
  height: 100%;
  display: block;
`;

export function Boxes({ data, reducer, pair }: GraphProps) {
  const ref = useScene<HTMLDivElement>();

  return html`<canvas ref=${ref} class=${styles}></canvas>`;
}

function useScene<T extends HTMLElement>() {
  const ref = useRef<T>();

  useEffect(() => {
    if (ref.current == null) return;
    const w = VIEWBOX[2];
    const h = VIEWBOX[3];

    const renderer = new THREE.WebGL1Renderer({ canvas: ref.current, alpha: true, antialias: true });
    renderer.setSize(w, h);

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 100);
    camera.position.z = 2;

    const controls = new OrbitControls(camera, ref.current);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.update();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(-1, 2, 5);
    scene.add(light);

    // Boxes
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    // Axes
    const axisMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const points = [];
    points.push(new THREE.Vector3(1, 0, 0));
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(0, 1, 0));
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(0, 0, 1));

    const axisGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const axes = new THREE.Line(axisGeometry, axisMaterial);
    scene.add(axes);

    camera.position.z = 10;

    let renderRequested = false;
    function render() {
      renderRequested = false;
      controls.update();
      renderer.render(scene, camera);
    }
    render();

    function requestRenderIfNotReqquested() {
      if (!renderRequested) {
        renderRequested = true;
        requestAnimationFrame(render);
      }
    }
    controls.addEventListener("change", requestRenderIfNotReqquested);
    window.onresize = render;
    render();
  }, []);

  return ref;
}
