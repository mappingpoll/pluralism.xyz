import { Geometries } from "./geometries";

export function geometries2JSON(geos: Geometries) {
  const { axes, highlight, merged, userMesh } = geos;
  return JSON.stringify({
    axes: axes.toJSON(),
    highlight: highlight.map(h => h.toJSON()),
    merged: merged.toJSON(),
    userMesh: userMesh != null ? userMesh.toJSON() : null,
  });
}
