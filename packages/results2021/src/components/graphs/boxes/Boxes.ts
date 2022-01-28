import { css } from "@emotion/css";
import { html } from "htm/preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

import { data2Rectangles, intersectRectangles } from "./data";
import { ActionType } from "../../../lib/reducer";
import { color } from "../../../lib/style";
import { computeMeshes, Meshes } from "./meshes";
import { GraphProps } from "../types";
import { Actors, makeActors } from "./actors";

const styles = css`
  background-color: ${color.bg};
  width: 100vh;
  height: 80vh;
  max-height: 90vh;
  max-width: 100%;
  display: block;
  /* border: 2px solid red; */

  @media only screen and (max-device-width: 430px) {
    height: 90vw;
    max-height: 100vw;
  }
`;

export function Boxes({ data, reducer, pair }: GraphProps) {
  const canvas = useRef<HTMLCanvasElement>();

  const [mount, setMount] = useState<HTMLCanvasElement | null>(null);

  const [actors, setActors] = useState<Actors | null>(null);

  const [readyForRender, setReadyForRender] = useState(false);

  useEffect(() => {
    setMount(canvas.current as HTMLCanvasElement);
  }, []);

  // GEOMETRIES
  //
  const meshes = useMemo<Meshes>(() => {
    const rectangles = data2Rectangles(data);

    const intersections = intersectRectangles(rectangles);

    return computeMeshes(pair, intersections);
  }, [pair]);

  // ACTORS
  //
  useEffect(() => {
    if (mount == null) return;

    const actors = makeActors(mount);

    setActors(actors);

    setReadyForRender(true);

    return () => {
      actors.dispose();
    };
  }, [mount]);

  // UPDATE SELECTION
  //
  useEffect(() => {
    if (!readyForRender || actors == null) return;

    actors.selectionsGroup.clear();

    actors.scene.add(actors.selectionsGroup);
    const { selectedUsers } = reducer.state;
    if (selectedUsers.length === 0) return;

    meshes.selection.forEach(box => {
      const { users: boxUsers } = box.userData;

      if (selectedUsers.length < boxUsers.length) return;
      if (selectedUsers.some((u: string) => boxUsers.includes(u))) {
        actors.selectionsGroup.add(box);
      }
    });
    actors.renderer.render(actors.scene, actors.camera);

    return () => actors.scene.remove(actors.selectionsGroup);
  }, [reducer.state.selectedUsers]);

  // SCENE
  //
  useEffect(() => {
    if (!readyForRender || actors == null || mount == null) return;
    const { scene, lights } = actors;

    scene.add(meshes.axes);
    scene.add(meshes.merged);
    if (meshes.userMesh != null) scene.add(meshes.userMesh);
    scene.add(...lights);

    return () => {
      scene.clear();
    };
  }, [actors, meshes.axes, meshes.merged, meshes.userMesh, mount, readyForRender]);

  useEffect(() => {
    if (!readyForRender || actors == null || mount == null) return;

    const { scene, camera, controls, renderer, pickHelper } = actors;

    function render() {
      renderer.render(scene, camera);
    }
    render();

    const pickPosition = { x: 0, y: 0 };
    clearPickPosition();

    function setPickPosition(event: MouseEvent) {
      if (mount == null) return;

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
      if (diff < 250) {
        if (pickHelper.users) {
          if (event.shiftKey) {
            reducer.dispatch({ type: ActionType.SelectAdd, payload: pickHelper.users });
          } else {
            reducer.dispatch({ type: ActionType.SelectOne, payload: pickHelper.users });
          }
        } else {
          reducer.dispatch({ type: ActionType.SelectNone });
        }
      }
      timer = 0;
    }

    // function handleResize() {
    //   if (mount == null) return;
    //
    //   const w = mount.clientWidth;
    //   const h = mount.clientHeight;
    //   const aspect = w / h;
    //
    //   renderer.setSize(w, h);
    //
    //   camera.left = -FRUSTUM_SIZE * aspect;
    //   camera.right = FRUSTUM_SIZE * aspect;
    //   camera.updateProjectionMatrix();
    //   render();
    // }

    controls.addEventListener("change", render);
    // window.addEventListener("resize", handleResize);
    mount.addEventListener("mousemove", setPickPosition);
    mount.addEventListener("mouseout", clearPickPosition);
    mount.addEventListener("mouseleave", clearPickPosition);
    mount.addEventListener("pointerdown", handlePointerDown);
    mount.addEventListener("pointerup", handlePointerUp);

    return () => {
      controls.removeEventListener("change", render);
      // window.removeEventListener("resize", handleResize);
      mount.removeEventListener("mousemove", setPickPosition);
      mount.removeEventListener("mouseout", clearPickPosition);
      mount.removeEventListener("mouseleave", clearPickPosition);
      mount.removeEventListener("pointerdown", handlePointerDown);
      mount.removeEventListener("pointerup", handlePointerUp);
    };
  }, [actors, meshes.hover, mount, readyForRender, reducer]);

  return html`<canvas ref=${canvas} class=${styles}></canvas>`;
}
