export class Color {
  constructor(c = 0, m = 0, y = 0) {
    this.c = c;
    this.m = m;
    this.y = y;
  }

  get rgb() {
    return Color.cmyToRgb(this);
  }

  get hsl() {
    return Color.cmyToHsl(this);
  }

  static cmyToRgb({ c, m, y }) {
    const r = 255 - c * 255;
    const g = 255 - m * 255;
    const b = 255 - y * 255;
    return {
      r: r,
      g: g,
      b: b,
    };
  }

  static rgbToHsl({ r, g, b }) {
    const r_ = r / 255;
    const g_ = g / 255;
    const b_ = b / 255;

    const max = Math.max(r_, g_, b_);
    const min = Math.min(r_, g_, b_);

    // "chroma"
    const c = max - min;

    // hue: degrees
    const h =
      60 *
      (c === 0
        ? 0
        : max === r_
        ? ((g_ - b_) / c) % 6
        : max === g_
        ? (b_ - r_) / c + 2
        : (r_ - g_) / c + 4);

    // lightness: [0, 1]
    const l = (max + min) / 2;

    // saturation: [0, 1]
    const s = c === 0 ? 0 : c === 1 ? 0 : c / (1 - Math.abs(2 * l - 1));

    return { h, s, l };
  }

  static cmyToHsl({ c, m, y }) {
    return Color.rgbToHsl(Color.cmyToRgb({ c, m, y }));
  }
}
