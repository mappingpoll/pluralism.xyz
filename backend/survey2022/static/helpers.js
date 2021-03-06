export function timestamp() {
  const datePattern = /^(\d{4})-(\d{2})-(\d{2})\s(\d{1,2}):(\d{2})$/;
  const [, year, month, day, rawHour, min] = datePattern.exec("2010-10-20 4:30");
  return new Date(`${year}-${month}-${day}T${`0${rawHour}`.slice(-2)}:${min}:00`);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    return (cache[key] = fn(...args));
  };
}

export function scalingFns({ element, horizontal = false }) {
  const memoizedGetBox = memoize(() => element.getBoundingClientRect());

  function getBox() {
    return memoizedGetBox(window.innerHeight, window.innerWidth);
  }

  function restrictXY(value) {
    const box = getBox();

    return horizontal ? clamp(value, box.left, box.right) - box.left : clamp(value, box.top, box.bottom) - box.top;
  }

  function normalize(value) {
    // transform an x or y value to a value between 0 and 1
    // this is the value that will be saved to localStorage
    const box = getBox();

    const domain = horizontal ? box.width : box.height;

    const n = value / domain;

    return Math.round((horizontal ? n : 1 - n) * 1000) / 1000; // flip the y axis
  }

  function denormalize(value) {
    // transform a value between 0 and 1 to x or y value

    const box = getBox();

    return (horizontal ? value : 1 - value) * (horizontal ? box.width : box.height);
  }

  return {
    getBox,
    restrictXY,
    normalize,
    denormalize,
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

export function makePersistFn(get, show) {
  return () => {
    const v = get();
    show(v);
    setCachedValue(v);
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

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
