import { referenceGeometryFns } from "./js/helpers.js";
const sliders = {
  cyan: document.querySelector(".color-cyan"),
  magenta: document.querySelector(".color-magenta"),
  yellow: document.querySelector(".color-yellow"),
};
const colorView = document.querySelector(".color-view");

const questionKey = window.location.pathname.slice(1); // skip leading slash

const cachedColor =
  window.localStorage.getItem(questionKey) != null ? JSON.parse(localStorage.getItem(questionKey)) : null;
let color = cachedColor ?? {
  c: 0,
  m: 0,
  y: 0,
};

const svgTriangle =
  "<svg class='bi bi-triangle' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='currentColor' viewBox='0 0 16 16'><path transform='rotate(90, 8, 8)' d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'></path></svg>";

let { normalize, scaleTranslate, referenceGeometry } = referenceGeometryFns(sliders.cyan, [0, 1]);
Object.values(sliders).forEach(slider => {
  appendHandle(slider);
});

const handles = {
  cyan: document.querySelector(".color-cyan .handle"),
  magenta: document.querySelector(".color-magenta .handle"),
  yellow: document.querySelector(".color-yellow .handle"),
  black: document.querySelector(".color-black .handle"),
};

init();

function init() {
  placeHandles();
  persist();
}
function placeHandles() {
  handles.cyan.style.top = `${scaleTranslate(color.c)}px`;
  handles.magenta.style.top = `${scaleTranslate(color.m)}px`;
  handles.yellow.style.top = `${scaleTranslate(color.y)}px`;
}

function appendHandle(parent) {
  const handle = document.createElement("div");
  handle.className = "handle";
  handle.innerHTML = svgTriangle;
  handle.style.translate = "translate(-100%)";
  makeInteractive(handle);
  parent.appendChild(handle);
  return handle;
}

function makeInteractive(handle) {
  handle.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);
  });

  handle.addEventListener("touchstart", () => {
    handle.addEventListener("touchmove", touchDrag);
  });
  handle.addEventListener("touchend", handleTouchEnd);

  function handleTouchEnd() {
    stopTouchDrag();
  }

  function drag(event) {
    handle.isDragging = true;
    handle.style.cursor = "grabbing";
    moveHandleTo(handle, restrictY(event.clientY));
    color = getColor();
    showColor(color);
  }

  function stopDrag() {
    handle.style.cursor = "grab";
    handle.isDragging = false;
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", stopDrag);
    persist();
  }

  function touchDrag(event) {
    drag({
      clientY: event.changedTouches[0].clientY,
    });
  }

  function stopTouchDrag() {
    handle.removeEventListener("touchmove", touchDrag);
    persist();
  }
}
function restrictY(value) {
  return value <= referenceGeometry.top
    ? 0
    : value >= referenceGeometry.bottom
    ? referenceGeometry.height
    : value - referenceGeometry.top;
}
function getColor() {
  return {
    c: normalize(+handles.cyan.style.top.slice(0, -2)),
    m: normalize(+handles.magenta.style.top.slice(0, -2)),
    y: normalize(+handles.yellow.style.top.slice(0, -2)),
  };
}
function cmyToRgb({ c, m, y }) {
  let r, g, b;
  r = 255 - c * 255;
  g = 255 - m * 255;
  b = 255 - y * 255;
  return {
    r: r,
    g: g,
    b: b,
  };
}
function showColor(color) {
  const { r, g, b } = cmyToRgb(color);
  colorView.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function persist() {
  color = getColor();
  showColor(color);
  localStorage.setItem(questionKey, JSON.stringify(color));
}

function moveHandleTo(handle, value) {
  handle.style.top = `${value}px`;
}
