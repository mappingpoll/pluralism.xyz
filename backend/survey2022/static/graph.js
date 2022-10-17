export class GraphGeometry {
  constructor(w, h, legendThickness) {
    this.left = legendThickness;
    this.right = w;
    this.top = 0;
    this.bottom = h - legendThickness;
    this.width = this.right - this.left;
    this.height = this.bottom - this.top;
  } 
}

export class Graph {
  constructor({ ctx, width, height, legendThickness }) {
    this.legendThickness = legendThickness;
    this.width = width;
    this.height = height;
    this.graphBox = new GraphGeometry(this.width, this.height, legendThickness);
    this.ctx = ctx;
  }

  translateNorm(x, y) {
    // Translate normalized coordinates to graph coordinates
    // domain: [0, 1] range: [left, right, top, bottom]
    return {
      x: x * this.graphBox.width + this.graphBox.left,
      y: y * this.graphBox.height + this.graphBox.top,
    };
  }

  drawValueGradient(n_bands=6) {
    const h = this.legendThickness / n_bands;
    const gradient = this.ctx.createLinearGradient(0, this.graphBox.top, 0, this.graphBox.bottom);
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "black");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, n_bands * h, this.graphBox.bottom);
  }

  drawSatRainbow(n_bands=6) {
    const h = this.legendThickness / n_bands;
    for (let i = 0; i < n_bands; i++) {
      // make gradients
      const gradient = this.ctx.createLinearGradient(this.graphBox.left, 0, this.graphBox.right, 0);
      gradient.addColorStop(0, `hsl(${i * 60}deg, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${i * 60}deg, 0%, 50%)`);
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(this.graphBox.left, this.height - i * h - h, this.graphBox.right, h);
    }
  }

  drawHueRainbow() {
    const n_stops = 6;
    const gradient = this.ctx.createLinearGradient(this.graphBox.left, 0, this.graphBox.right, 0);
    for (let i = 0; i < n_stops; i++) {
      gradient.addColorStop(i / n_stops, `hsl(${i / n_stops * 360}deg, 100%, 50%)`);
    }
    this.ctx.fillStyle = gradient
    this.ctx.fillRect(this.graphBox.left, this.height - this.legendThickness, this.graphBox.right, this.height)
  }

  lightSat(colors, cellSize) {
    this.drawValueGradient();
    this.drawSatRainbow();

    for (const color of colors) {
      const { s, l } = color.hsl;
      const _x = 1 - s;
      const _y = 1 - l;
      const { x, y } = this.translateNorm(_x, _y);
      // const { r, g, b } = Color.cmyToRgb(cmyColors[i]);
      this.ctx.fillStyle = color.rgbString;
      this.ctx.fillRect(x, y - cellSize, cellSize, cellSize);
    }
  }

  mosaic(colors) {
    this.drawValueGradient();
    this.drawSatRainbow();

    // determine grid size in datum units
    // H is the longer side, as the case may be
    const gridH = Math.ceil(Math.sqrt(colors.length));
    const gridW = Math.floor(colors.length / gridH);

    const cellH = this.graphBox.height / gridH;
    const cellW = this.graphBox.width / gridW;

    // sort by lightness, saturation
    // step 0: sort by lightness
    // step 1: find the `gridW` darkest colors and remove them from the list
    // step 2: sort them from most to least saturated
    // step 3: repeat with the next `gridW` darkest colors among the remaining colors
    const sorted = colors.sort((a, b) => a.l - b.l);

    for (let _y = 0; _y < gridH; _y++) {
      const row = sorted.splice(0, gridW); // get the next row
      row.sort((a, b) => a.s - b.s); // sort by saturation (l)
      let _x = 0;
      for (const color of row) {
        this.ctx.fillStyle = color.rgbString;
        const { x, y } = this.translateNorm(1 - (_x + 1) / gridW, 1 - (_y + 1) / gridH);
        this.ctx.fillRect(x, y, cellW, cellH);
        _x++;
      }
    }
  }

  mosaic_by_hue(colors) {
    this.drawValueGradient();
    this.drawHueRainbow();

    // determine grid size in datum units
    // H is the longer side, as the case may be
    const gridH = Math.ceil(Math.sqrt(colors.length));
    const gridW = Math.floor(colors.length / gridH);

    const cellH = this.graphBox.height / gridH;
    const cellW = this.graphBox.width / gridW;

    // sort by lightness, hue
    // step 0: sort by hue
    // step 1: find the `gridW` darkest colors and remove them from the list
    // step 2: sort them from most to least saturated
    // step 3: repeat with the next `gridW` darkest colors among the remaining colors
    const sorted = colors.sort((a, b) => a.l - b.l);

    for (let _y = 0; _y < gridH; _y++) {
      const row = sorted.splice(0, gridW); // get the next row
      row.sort((a, b) => b.h - a.h); // sort by hue
      let _x = 0;
      for (const color of row) {
        this.ctx.fillStyle = color.rgbString;
        const { x, y } = this.translateNorm(1 - (_x + 1) / gridW, 1 - (_y + 1) / gridH);
        this.ctx.fillRect(x, y, cellW, cellH);
        _x++;
      }
    }
  }

  stack_1d({ values_sorted, n_bins }) {
    // assume values E [0, 1]

    // draw boxes, bin by bin
    const gap_size = 2;
    const cell_size = this.height / n_bins - gap_size;
    const tick_width = 5;

    let start_idx = 0;
    for (let i = 0; i < n_bins; i++) {
      const lim = i / n_bins;
      const end_idx = values_sorted.findIndex(v => v >= lim);
      const stack_size = values_sorted.slice(start_idx, end_idx).length;
      start_idx = end_idx;

      const y = i * (cell_size + gap_size)

      for (let j = 0; j < stack_size; j++) {
        const x = tick_width + gap_size + j * (cell_size + gap_size);
        this.ctx.fillRect(x, y, cell_size, cell_size);
      }
    }

    // draw axis
    const axis_x = tick_width;
    this.ctx.beginPath();
    this.ctx.moveTo(axis_x, 0);
    this.ctx.lineTo(axis_x, this.height);
    //ticks
    this.ctx.moveTo(axis_x, 0);
    this.ctx.lineTo(axis_x - tick_width, 0)
    this.ctx.moveTo(axis_x, this.height / 2);
    this.ctx.lineTo(axis_x - tick_width, this.height / 2);
    this.ctx.moveTo(axis_x, this.height);
    this.ctx.lineTo(axis_x - tick_width, this.height)
    this.ctx.stroke();
  }
}
