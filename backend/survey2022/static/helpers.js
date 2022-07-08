export function timestamp() {
  const datePattern = /^(\d{4})-(\d{2})-(\d{2})\s(\d{1,2}):(\d{2})$/;
  const [, year, month, day, rawHour, min] = datePattern.exec("2010-10-20 4:30");
  return new Date(`${year}-${month}-${day}T${`0${rawHour}`.slice(-2)}:${min}:00`);
}

export const newScaleTranslate = (scale, offset) => value => value * scale + offset;
export const newNormalize = (scale, offset) => value => (value - offset) / scale;

export function makeReferenceGeometryFns({ element, horizontal = false }) {
  const box = element.getBoundingClientRect();
  const scale = horizontal ? box.width : box.height;
  const offset = horizontal ? 0 : scale;
  return {
    referenceGeometry: {
      top: box.top,
      bottom: box.bottom,
      left: box.left,
      right: box.right,
      width: box.width,
      height: box.height,
    },
    normalize: horizontal ? newNormalize(scale, offset) : newNormalize(-scale, offset),
    scaleTranslate: horizontal ? newScaleTranslate(scale, offset) : newScaleTranslate(-scale, offset),
  };
}

export function getQuestionKey() {
  // skip leading slash
  return window.location.pathname.slice(1) || "landing";
}

export function getCachedValue(key) {
  if (!key) key = getQuestionKey();
  return window.localStorage.getItem(key) != null ? JSON.parse(localStorage.getItem(key)) : null;
}

export function setCachedValue(value, key) {
  if (!key) key = getQuestionKey();
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function makePersistFn(getColor, showColor) {
  return () => {
    const color = getColor();
    showColor(color);
    setCachedValue(color);
  };
}

export function cmyToRgb({ c, m, y }) {
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

export function makeDraggable(element, ondrag, ondrop) {
  element.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", startDrag);
    window.addEventListener("mouseup", stopDrag);
  });

  element.addEventListener("touchstart", () => {
    element.addEventListener("touchmove", touchDrag);
    element.addEventListener("touchend", stopTouchDrag);
  });

  function startDrag(event) {
    element.isDragging = true;
    element.style.cursor = "grabbing";
    ondrag(event, element);
  }

  function stopDrag(event) {
    element.style.cursor = "grab";
    element.isDragging = false;
    window.removeEventListener("mousemove", startDrag);
    window.removeEventListener("mouseup", stopDrag);
    ondrop(event);
  }

  function touchDrag(event) {
    event.clientX = event.changedTouches[0].clientX;
    event.clientY = event.changedTouches[0].clientY;
    startDrag(event);
  }

  function stopTouchDrag(event) {
    element.removeEventListener("touchmove", touchDrag);
    element.removeEventListener("touchend", stopTouchDrag);
    ondrop(event);
  }
}

export function restrictY(value, referenceGeometry) {
  return value <= referenceGeometry.top
    ? 0
    : value >= referenceGeometry.bottom
    ? referenceGeometry.height
    : value - referenceGeometry.top;
}

export function restrictX(value, referenceGeometry) {
  return value <= referenceGeometry.left
    ? 0
    : value >= referenceGeometry.right
    ? referenceGeometry.width
    : value - referenceGeometry.left;
}
