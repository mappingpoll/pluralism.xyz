import { getCachedValue, makeDraggable, makePersistFn, restrictY, makeReferenceGeometryFns } from "../helpers.js";

const colorView = document.querySelector(".color-view");
const slider = document.querySelector("#black");
const handle = document.querySelector(".handle");

let { normalize, scaleTranslate, referenceGeometry } = makeReferenceGeometryFns({ element: slider });

let color = getCachedValue() ?? { k: 0.5 };

const getColor = () => {
  return { k: normalize(+handle.style.top.slice(0, -2)) };
};

const showColor = color => {
  colorView.style.backgroundColor = `rgb(${255 - color.k * 255}, ${255 - color.k * 255}, ${255 - color.k * 255})`;
};

const persist = makePersistFn(getColor, showColor);

const ondrag = (event, handle) => {
  handle.style.top = `${restrictY(event.clientY, referenceGeometry)}px`;
  showColor(getColor());
};

const ondrop = () => {
  persist();
};

makeDraggable(handle, ondrag, ondrop);
handle.style.top = `${scaleTranslate(color.k)}px`;
persist();
