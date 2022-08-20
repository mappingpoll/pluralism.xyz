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
    return Color.cmyToRgb(this);
  }

  get hsl() {
    return Color.cmyToHsl(this);
  }

  get hslString() {
    return `hsl(${this.h}deg, ${this.s * 100}%, ${this.l * 100}%)`;
  }

  get rgbString() {
    return `rgb(${this.r * 255}, ${this.g * 255}, ${this.b * 255})`;
  }

  static cmyToRgb({ c, m, y }) {
    // assumes k is 0
    return {
      r: 1 - c,
      g: 1 - m,
      b: 1 - y,
    };
  }

  static rgbToHsl({ r, g, b }) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // range; ie "chroma"
    const c = max - min;
    // mid-range; ie lightness
    let l = (max + min) / 2;

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

    // saturation: [0, 1]
    let s;
    if (l === 0 || l === 1) {
      s = 0;
    } else {
      s = (max - l) / Math.min(l, 1 - l);
    }

    // round to 3 decimal places
    // (ie one byte per channel: 1/256 ~= 0.004 )
    h = Math.round(h * 1000) / 1000;
    s = Math.round(s * 1000) / 1000;
    l = Math.round(l * 1000) / 1000;

    return { h, s, l };
  }

  static cmyToHsl({ c, m, y }) {
    return Color.rgbToHsl(Color.cmyToRgb({ c, m, y }));
  }
}
