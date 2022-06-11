import {
  appendHandle,
  cmyToRgb,
  referenceGeometryFns,
  getCachedValue,
  makeDraggable,
  restrictY,
  makePersistFn,
} from "../helpers.js";

const colorView = document.querySelector(".color-view");

let color = getCachedValue() ?? {
  c: 0,
  m: 0,
  y: 0,
};

const sliders = {
  cyan: document.querySelector(".color-cyan"),
  magenta: document.querySelector(".color-magenta"),
  yellow: document.querySelector(".color-yellow"),
};

let { normalize, scaleTranslate, referenceGeometry } = referenceGeometryFns(sliders.cyan, [0, 1]);

const getColor = () => {
  return {
    c: normalize(+handles.cyan.style.top.slice(0, -2)),
    m: normalize(+handles.magenta.style.top.slice(0, -2)),
    y: normalize(+handles.yellow.style.top.slice(0, -2)),
  };
};

const showColor = color => {
  const { r, g, b } = cmyToRgb(color);
  colorView.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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

Object.values(sliders).forEach(slider => {
  const handle = appendHandle(slider, referenceGeometry);
  makeDraggable(handle, ondrag, ondrop);
});

const handles = {
  cyan: document.querySelector(".color-cyan .handle"),
  magenta: document.querySelector(".color-magenta .handle"),
  yellow: document.querySelector(".color-yellow .handle"),
  black: document.querySelector(".color-black .handle"),
};

handles.cyan.style.top = `${scaleTranslate(color.c)}px`;
handles.magenta.style.top = `${scaleTranslate(color.m)}px`;
handles.yellow.style.top = `${scaleTranslate(color.y)}px`;
persist();
