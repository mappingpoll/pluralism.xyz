import { html } from "htm/preact";
import { useEffect, useRef } from "preact/hooks";
import * as Three from "three";
import { VIEWBOX } from "../../lib/constants";
import { Props } from "./types";

export function Boxes({ data, reducer }: Props) {
  const ref = useScene<HTMLDivElement>();

  return html`<div ref=${ref}></div>`;
}

function useScene<T extends HTMLElement>() {
  const ref = useRef<T>();

  useEffect(() => {
    if (ref.current != null) {
      const w = VIEWBOX[2];
      const h = VIEWBOX[3];
      const scene = new Three.Scene();
      const camera = new Three.PerspectiveCamera(75, w / h, 0.1, 1000);

      const renderer = new Three.WebGL1Renderer();

      renderer.setSize(w, h);

      ref.current.appendChild(renderer.domElement);

      const geometry = new Three.BoxGeometry();
      const material = new Three.MeshBasicMaterial({ color: 0x00f323 });
      const cube = new Three.Mesh(geometry, material);

      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      }

      animate();
    }
  }, []);

  return ref;
}
