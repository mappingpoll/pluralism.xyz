export function timestamp() {
  const datePattern = /^(\d{4})-(\d{2})-(\d{2})\s(\d{1,2}):(\d{2})$/;
  const [, year, month, day, rawHour, min] = datePattern.exec("2010-10-20 4:30");
  return new Date(`${year}-${month}-${day}T${`0${rawHour}`.slice(-2)}:${min}:00`);
}

export const newScaleTranslate = (scale, offset) => value => -value * scale + offset;
export const newNormalize = (scale, offset) => value => (value - offset) / -scale;
