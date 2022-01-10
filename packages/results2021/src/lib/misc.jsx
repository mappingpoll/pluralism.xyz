export const isChosenAxis = (a) => a != "";

export const hasXAxis = ({ x }) => isChosenAxis(x);

export const hasXYAxes = ({ x, y }) => isChosenAxis(x) && isChosenAxis(y);

export const canShowCustomViz = (axes) => hasXYAxes(axes);

// "symetrical" floor fn
export function symFloor(n) {
  return (n / Math.abs(n)) * Math.floor(Math.abs(n));
}

export function clamp(n, min, max) {
  if (min > max) min = max;
  if (max < min) max = min;
  return n <= min ? min : n >= max ? max : n;
}

export function rangeSize(range) {
  return Math.abs(Math.max(...range) - Math.min(...range));
}
