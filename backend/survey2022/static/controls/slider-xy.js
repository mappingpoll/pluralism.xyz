import {
  getCachedValue,
  makeReferenceGeometryFns,
  restrictX,
  restrictY,
  makePersistFn,
  makeDraggable,
} from "../helpers.js";

let [age, proportion] = getCachedValue() ?? [0, 0];

const { xRange, yRange } = window;

const ageDisplay = document.querySelector("#age");
const proportionDisplay = document.querySelector("#proportion");

const xSlider = document.querySelector(".hslider");
const ySlider = document.querySelector(".vslider");
const handle = document.querySelector(".handle");

let {
  normalize: normalizeX,
  scaleTranslate: scaleTranslateX,
  referenceGeometry: referenceGeometryX,
} = makeReferenceGeometryFns({ element: xSlider, horizontal: true });

let {
  normalize: normalizeY,
  scaleTranslate: scaleTranslateY,
  referenceGeometry: referenceGeometryY,
} = makeReferenceGeometryFns({ element: ySlider });

const getAge = () => {
  return normalizeY(+handle.style.top.slice(0, -2));
};

const getProportion = () => {
  return normalizeX(+handle.style.left.slice(0, -2));
};

const showValue = (value, range, element) => {
  const d = Math.abs(range[1] - range[0]);
  const p = Math.round(value * d);
  element.textContent = p.toString();
};

const persist = makePersistFn(
  () => [getAge(), getProportion()],
  ([a, p]) => {
    showValue(a, yRange, ageDisplay);
    showValue(p, xRange, proportionDisplay);
  }
);

const ondrag = event => {
  handle.style.left = ySlider.style.left = `${restrictX(event.clientX, referenceGeometryX)}px`;
  handle.style.top = xSlider.style.top = `${restrictY(event.clientY, referenceGeometryY)}px`;

  showValue(getAge(), yRange, ageDisplay);
  showValue(getProportion(), xRange, proportionDisplay);
};

const ondrop = event => {
  persist();
};

makeDraggable(handle, ondrag, ondrop);
handle.style.left = ySlider.style.left = `${scaleTranslateX(proportion)}px`;
handle.style.top = xSlider.style.top = `${scaleTranslateY(age)}px`;
persist();
