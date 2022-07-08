import {
  cmyToRgb,
  makeReferenceGeometryFns,
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
  cyan: document.querySelector("#cyan"),
  magenta: document.querySelector("#magenta"),
  yellow: document.querySelector("#yellow"),
};

const handles = {
  cyan: sliders.cyan.parentElement.querySelector(".handle"),
  magenta: sliders.magenta.parentElement.querySelector(".handle"),
  yellow: sliders.yellow.parentElement.querySelector(".handle"),
};

let { normalize, scaleTranslate, referenceGeometry } = makeReferenceGeometryFns({ element: sliders.cyan });

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

const ondrag = (event, handle) => {
  handle.style.top = `${restrictY(event.clientY, referenceGeometry)}px`;
  showColor(getColor());
};

const ondrop = () => {
  persist();
};

Object.values(handles).forEach(handle => {
  makeDraggable(handle, ondrag, ondrop);
});

handles.cyan.style.top = `${scaleTranslate(color.c)}px`;
handles.magenta.style.top = `${scaleTranslate(color.m)}px`;
handles.yellow.style.top = `${scaleTranslate(color.y)}px`;
persist();
