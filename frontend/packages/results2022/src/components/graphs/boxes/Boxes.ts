import { css } from "@emotion/css";
import { html } from "htm/preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

import { data2Rectangles, intersectRectangles } from "./data";
import { ActionType } from "../../../lib/reducer";
import { color } from "../../../lib/style";
import { computeMeshes, isPartOfSelection, Meshes } from "./meshes";
import { GraphProps } from "../types";
import { Actors, makeActors } from "./actors";
import { PickHelper } from "./helpers";

const styles = css`
  background-color: ${color.bg};
  width: 100%;
  height: 50vh;
  max-width: max(70vh, 90vw);
  display: block;
  /* border: 2px solid red; */

  @media only screen and (max-device-width: 430px) {
    max-height: 100vw;
  }
`;

export function Boxes({ data, reducer, pair }: GraphProps) {
  const canvas = useRef<HTMLCanvasElement>();

  const [mount, setMount] = useState<HTMLCanvasElement | null>(null);

  const [actors, setActors] = useState<Actors>();

  const [pickHelper, setPickHelper] = useState<PickHelper>();

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
  }, [pair.x, pair.y]);

  // ACTORS
  //
  useEffect(() => {
    if (mount == null) return;

    const actors = makeActors(mount);

    setActors(actors);

    const ph = new PickHelper(actors.scene, meshes.hover, meshes.userMap);

    setPickHelper(ph);

    setReadyForRender(true);

    return () => {
      actors.dispose();
    };
  }, [meshes.hover, meshes.userMap, mount]);

  // UPDATE SELECTION
  //
  useEffect(() => {
    if (!readyForRender || actors == null) return;

    actors.selectionsGroup.clear();
    actors.scene.add(actors.selectionsGroup); // clear() also removed it from the scene

    const { selectedUsers } = reducer.state;
    if (selectedUsers.length === 0) return;

    const toAdd =
      selectedUsers.length === 1
        ? [meshes.userMap[selectedUsers[0]]]
        : meshes.selection.filter(h => isPartOfSelection(selectedUsers, h.userData));

    if (toAdd != null && toAdd.length > 0) actors.selectionsGroup.add(...toAdd);

    actors.renderer.render(actors.scene, actors.camera);

    return () => actors.scene.remove(actors.selectionsGroup);
  }, [
    reducer.state.selectedUsers,
    meshes.hover,
    readyForRender,
    actors,
    reducer.state,
    meshes.userMap,
    meshes.selection,
  ]);

  // SCENE
  //
  useEffect(() => {
    if (!readyForRender || actors == null || mount == null) return;
    const { scene } = actors;

    scene.add(meshes.axes);
    scene.add(meshes.graph);
    if (meshes.userMesh != null) scene.add(meshes.userMesh);

    return () => {
      scene.clear();
    };
  }, [actors, meshes.hover, meshes.axes, meshes.graph, mount, readyForRender, meshes.userMesh]);

  // RENDER
  //
  useEffect(() => {
    if (!readyForRender || actors == null || mount == null || pickHelper == null) return;

    const { scene, camera, controls, renderer } = actors;

    function render() {
      renderer.render(scene, camera);
    }
    render();

    const pickPosition = { x: 0, y: 0 };
    clearPickPosition();

    function setPickPosition(event: MouseEvent) {
      if (mount == null || pickHelper == null) return;

      const rect = mount.getBoundingClientRect();

      pickPosition.x = ((event.clientX - rect.left) / mount.clientWidth) * 2 - 1;
      pickPosition.y = ((event.clientY - rect.top) / mount.clientHeight) * -2 + 1; // note we flip Y

      pickHelper.pick(pickPosition, camera);

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
      if (pickHelper == null) return;
      const diff = Date.now() - timer;
      if (diff < 250) {
        if (pickHelper.user.length > 0) {
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
      meshes.dispose();
      controls.removeEventListener("change", render);
      mount.removeEventListener("mousemove", setPickPosition);
      mount.removeEventListener("mouseout", clearPickPosition);
      mount.removeEventListener("mouseleave", clearPickPosition);
      mount.removeEventListener("pointerdown", handlePointerDown);
      mount.removeEventListener("pointerup", handlePointerUp);
    };
  }, [actors, meshes, meshes.hover, mount, pickHelper, readyForRender, reducer]);

  return html`<canvas ref=${canvas} class=${styles}></canvas>`;
}
