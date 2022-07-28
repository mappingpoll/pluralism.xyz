import { cmyToRgb, getCachedValue, makeDraggable, makePersistFn, scalingFns } from "../helpers.js";

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
  cyan: document.querySelector("#cyan-handle"),
  magenta: document.querySelector("#magenta-handle"),
  yellow: document.querySelector("#yellow-handle"),
};

let { normalize, denormalize, restrictXY } = scalingFns({ element: sliders.cyan });

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
  handle.style.top = handle.nextSibling.style.top = `${restrictXY(event.clientY)}px`;
  showColor(getColor());
};

const ondrop = () => {
  persist();
};

Object.values(handles).forEach(handle => {
  makeDraggable(handle, ondrag, ondrop);
});

handles.cyan.style.top = handles.cyan.nextSibling.style.top = `${denormalize(color.c)}px`;
handles.magenta.style.top = handles.magenta.nextSibling.style.top = `${denormalize(color.m)}px`;
handles.yellow.style.top = handles.yellow.nextSibling.style.top = `${denormalize(color.y)}px`;
window.addEventListener("resize", () => {
  const { c, m, y } = getCachedValue() ?? { c: 0, m: 0, y: 0 };
  const v = [c, m, y];
  Object.values(handles).forEach((handle, i) => {
    handle.style.top = handle.nextSibling.style.top = `${denormalize(v[i])}px`;
  });
});

showColor(color);
