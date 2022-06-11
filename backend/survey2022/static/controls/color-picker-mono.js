import {
  appendHandle,
  getCachedValue,
  makeDraggable,
  makePersistFn,
  restrictY,
  referenceGeometryFns,
} from "../helpers.js";

const colorView = document.querySelector(".color-view");
const slider = document.querySelector(".color-black");

let { normalize, scaleTranslate, referenceGeometry } = referenceGeometryFns(slider, [0, 1]);

const handle = appendHandle(slider, referenceGeometry);

let color = getCachedValue() ?? { k: 0 };

const getColor = () => {
  color = { k: normalize(+handle.style.top.slice(0, -2)) };
  return color;
};

const showColor = color => {
  colorView.style.backgroundColor = `rgb(${255 - color.k * 255}, ${255 - color.k * 255}, ${255 - color.k * 255})`;
};

const persist = makePersistFn(getColor, showColor);

const ondrag = event => {
  const handle = event.target;
  handle.style.top = `${restrictY(event.clientY, referenceGeometry)}px`;
  showColor(getColor());
};

const ondrop = () => {
  persist();
};

makeDraggable(handle, ondrag, ondrop);
handle.style.top = `${scaleTranslate(color.k)}px`;
showColor(getColor());
