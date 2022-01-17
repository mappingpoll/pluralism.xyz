export function symFloor(n) {
  return (n / Math.abs(n)) * Math.floor(Math.abs(n));
}

export function rangeSize(range) {
  return Math.abs(Math.max(...range) - Math.min(...range));
}
