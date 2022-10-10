export class Color {
  constructor({ c, m, y } = { c: 0, m: 0, y: 0 }) {
    // all values are [0, 1]
    this.c = c;
    this.m = m;
    this.y = y;
    const { r, g, b } = Color.cmyToRgb(this);
    this.r = r;
    this.g = g;
    this.b = b;
    const { h, s, l } = Color.cmyToHsl(this);
    // except h, which is [0, 360]
    this.h = h;
    this.s = s;
    this.l = l;
  }

  get cmy() {
    return { c: this.c, m: this.m, y: this.y };
  }

  get rgb() {
    return { r: this.r, g: this.g, b: this.b };
  }

  get hsl() {
    return { h: this.h, s: this.s, l: this.l };
  }

  get hsv() {
    return Color.hslToHsv(this.hsl);
  }

  get hslString() {
    return `hsl(${this.h}deg, ${this.s * 100}%, ${this.l * 100}%)`;
  }

  get rgbString() {
    return `rgb(${this.r * 255}, ${this.g * 255}, ${this.b * 255})`;
  }

  clone() {
    const clone = Object.create(Object.getPrototypeOf(this));
    return Object.assign(clone, this);
  }

  static cmyToRgb({ c, m, y }) {
    // assumes k is 0
    return {
      r: 1 - c,
      g: 1 - m,
      b: 1 - y,
    };
  }

  static hue({ r, g, b }) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // range; ie "chroma"
    const c = max - min;

    // hue: degrees
    let h;
    if (c === 0) {
      h = 0;
    } else if (max === r) {
      h = 60 * ((g - b) / c);
    } else if (max === g) {
      h = 60 * (2 + (b - r) / c);
    } else {
      h = 60 * (4 + (r - g) / c);
    }
    if (h < 0) {
      h += 360;
    }
    return { max, min, h };
  }

  static rgbToHwb({ r, g, b }) {
    const { max, min, h } = Color.hue({ r, g, b });
    const w = min;
    const _b = 1 - max;

    return { h, w, b: _b };
  }

  static rgbToHsl({ r, g, b }) {
    let { max, min, h } = Color.hue({ r, g, b });

    // mid-range; ie lightness
    let l = (max + min) / 2;

    // saturation: [0, 1]
    let s;
    if (l === 0 || l === 1) {
      s = 0;
    } else {
      s = (max - l) / Math.min(l, 1 - l);
    }

    // round to 3 decimal places
    h = Math.round(h * 1000) / 1000;
    s = Math.round(s * 1000) / 1000;
    l = Math.round(l * 1000) / 1000;

    return { h, s, l };
  }

  static hslToHsv({ h, s, l }) {
    const v = l + s * Math.min(l, 1 - l);
    const sv = v === 0 ? 0 : 2 * (1 - l / v);

    return { h, s: sv, v };
  }

  static cmyToHsl({ c, m, y }) {
    return Color.rgbToHsl(Color.cmyToRgb({ c, m, y }));
  }
}
