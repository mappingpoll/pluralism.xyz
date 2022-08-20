import { Color } from "./color.js";

export class GraphGeometry {
  constructor(canvasW, canvasH, legendThickness) {
    this.left = legendThickness;
    this.right = canvasW;
    this.top = 0;
    this.bottom = canvasH - legendThickness;
    this.width = this.right - this.left;
    this.height = this.bottom - this.top;
  }
}

export class Graph {
  constructor(canvas, legendThickness) {
    this.canvas = canvas;
    this.legendThickness = legendThickness;
    this.width = canvas.width;
    this.height = canvas.height;
    this.graphBox = new GraphGeometry(this.width, this.height, legendThickness);
    this.ctx = canvas.getContext("2d");
  }

  translateNorm(x, y) {
    // Translate normalized coordinates to graph coordinates
    // domain: [0, 1] range: [left, right, top, bottom]
    return {
      x: x * this.graphBox.width + this.graphBox.left,
      y: y * this.graphBox.height + this.graphBox.top,
    };
  }

  drawLegends() {
    // draw saturation rainbow
    const nbands = 6;
    const h = this.legendThickness / nbands;
    for (let i = 0; i < nbands; i++) {
      // make gradients
      const gradient = this.ctx.createLinearGradient(this.graphBox.left, 0, this.graphBox.right, 0);
      gradient.addColorStop(0, `hsl(${i * 60}deg, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${i * 60}deg, 0%, 50%)`);
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(this.graphBox.left, this.height - i * h - h, this.graphBox.right, h);
    }
    // draw value gradient
    const gradient = this.ctx.createLinearGradient(0, this.graphBox.top, 0, this.graphBox.bottom);
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "black");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, nbands * h, this.graphBox.bottom);
  }

  lightSat(colors, cellSize) {
    this.drawLegends();

    for (const color of colors) {
      const { s, l } = color.hsl;
      const _x = 1 - s;
      const _y = 1 - l;
      const { x, y } = this.translateNorm(_x, _y);
      // const { r, g, b } = Color.cmyToRgb(cmyColors[i]);
      this.ctx.fillStyle = color.rgbString;
      this.ctx.fillRect(x, y, cellSize, cellSize);
    }
  }

  mosaic(colors) {
    this.drawLegends();

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
      row.sort((a, b) => a.s - b.s); // sort by saturation
      for (let _x = 0; _x < gridW; _x++) {
        const color = row[_x];
        this.ctx.fillStyle = color.rgbString;
        const { x, y } = this.translateNorm(1 - (_x + 1) / gridW, 1 - (_y + 1) / gridH);
        this.ctx.fillRect(x, y, cellW, cellH);
      }
    }
  }
}
