import { newNormalize, newScaleTranslate, referenceGeometryFns } from "./js/helpers.js";

const dots = document.querySelector(".dots");
const rail = document.querySelector(".rail");
const ticks = document.querySelector(".ticks");
const wagon = document.querySelector(".wagon");
const reset = document.querySelector(".reset");
const display = document.querySelector(".valueDisplay");

const svgTriangle =
  "<svg class='bi bi-triangle' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='currentColor' viewBox='0 0 16 16'><path transform='rotate(90, 8, 8)' d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'></path></svg>";

const questionKey = window.location.pathname.slice(1); // skip leading slash

const cachedPoints =
  window.localStorage.getItem(questionKey) != null ? JSON.parse(localStorage.getItem(questionKey)) : null;
const defaultPoints = [0];

setControlIsActive(cachedPoints != null);

const isDisplayable = window.valueRange != null;
let isDragging = false;
let { normalize, scaleTranslate, referenceGeometry } = referenceGeometryFns(rail);

let normalizedPoints = cachedPoints ?? defaultPoints;

let displayHandler;

if (isDisplayable) {
  displayHandler = showValue(window.valueRange);
  window.addEventListener("mousemove", () => {
    if (isDragging) displayHandler();
  });
}

normalizedPoints.forEach(y => makeDotAt(scaleTranslate(y)));

if (isDisplayable) displayHandler();

////////////////////////////// funcs

function makeDotAt(y) {
  const dot = makeDot();
  moveDotTo(dot, y);
  return dot;
}

function makeDot() {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.innerHTML = svgTriangle;
  makeInteractive(dot);
  if (isDisplayable) makeDisplayable(dot, displayHandler);
  dots.appendChild(dot);
  return dot;
}

function destroyDot(dot) {
  dot.remove();
  updateWagon();
}

let lastTap = 0;

function isDoubleTap() {
  const now = Date.now();
  const d = now - lastTap;
  lastTap = now;
  return d < 600;
}

function addDot(event) {
  event.preventDefault();
  setControlIsActive(true);
  let y = getDotTops()[0] + 30 + referenceGeometry.top;
  if (y >= referenceGeometry.bottom) y -= 60;
  makeDotAt(restrictY(y));
  persist();
}

function removeDot(event) {
  destroyDot(event.target);
}

function setReferenceGeometry() {
  const box = rail.getBoundingClientRect();
  const scale = box.height / 2;
  const offset = scale;
  referenceGeometry.top = box.top;
  referenceGeometry.bottom = box.bottom;
  referenceGeometry.height = box.height;
  normalize = newNormalize(scale, offset);
  scaleTranslate = newScaleTranslate(scale, offset);
}

const resizeObserver = new ResizeObserver(() => {
  setReferenceGeometry();
  updateWith(normalizedPoints);
});
resizeObserver.observe(document.body);

function setControlIsActive(bool) {
  rail.style.opacity = ticks.style.opacity = bool ? "1" : "0.5";
}

function updateWith(points) {
  const dots = getDots();
  if (dots.length > points.length) destroyDot(dots[1]);

  points.forEach((p, i) => {
    const dot = dots[i];
    if (dot == null) {
      makeDotAt(scaleTranslate(p));
    } else {
      moveDotTo(dot, scaleTranslate(p));
    }
  });
}

function moveDotTo(dot, value) {
  dot.style.top = `${value}px`;
  updateWagon();
}

function getDotTops() {
  return getDots().map(dot => +dot.style.top.slice(0, -2));
}

function getDotTopsNormalized() {
  let t = getDotTops()
    .map(normalize)
    .map(v => Math.round(v * 1000) / 1000);
  if (t.length > 1) t = t.sort((a, b) => a - b);
  return t;
}

function updateWagon() {
  let tops = getDotTops();
  if (tops.length === 2) tops = tops.sort((a, b) => a - b);
  let [top, bottom] = [tops[0], tops[1] ?? tops[0]];
  wagon.style.top = `${top}px`;
  wagon.style.height = `${bottom - top}px`;
}

function makeInteractive(element) {
  element.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);
  });
  element.addEventListener("dblclick", handleDoubleClick);

  element.addEventListener("touchstart", () => {
    element.addEventListener("touchmove", touchDrag);
  });
  element.addEventListener("touchend", handleTouchEnd);

  function handleDoubleClick(event) {
    if (hasSecondDot()) removeDot(event);
    else addDot(event);
  }

  function handleTouchEnd(event) {
    if (isDoubleTap()) {
      if (hasSecondDot()) removeDot(event);
      else addDot(event);
    } else {
      stopTouchDrag();
    }
  }

  function drag(event) {
    isDragging = true;
    setControlIsActive(true);
    element.style.cursor = "grabbing";
    moveDotTo(element, restrictY(event.clientY));
  }

  function stopDrag() {
    element.style.cursor = "grab";
    isDragging = false;
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
    element.removeEventListener("touchmove", touchDrag);
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

if (reset != null) {
  reset.addEventListener("click", resetPoints);
}

function persist(points) {
  let p;
  if (points != null) {
    p = points;
    if (p.length > 1) p = p.sort((a, b) => a - b);
  } else {
    p = getDotTopsNormalized();
  }
  localStorage.setItem(questionKey, JSON.stringify(p));
}

function resetPoints() {
  setControlIsActive(false);
  normalizedPoints = defaultPoints;
  updateWith(normalizedPoints);
  localStorage.removeItem(questionKey);
}

function getDots() {
  return Array.from(document.querySelectorAll(".dot"));
}

function hasSecondDot() {
  return getDots().length === 2;
}

function makeDisplayable(dot, handler) {
  dot.addEventListener("touchmove", handler);
}

function showValue(range) {
  const d = Math.abs(range[1] - range[0]);
  const clamp = v => range[0] + ((v + 1) * d) / 2;
  return () => {
    const p = getDotTopsNormalized().map(clamp).map(Math.round);
    display.textContent = p.toString();
  };
}
