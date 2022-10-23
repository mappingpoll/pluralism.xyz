export class GraphGeometry {
  constructor(w, h, padding_x, padding_y = 0) {
    this.left = padding_x;
    this.right = w - padding_y;
    this.top = padding_y;
    this.bottom = padding_y > 0 ? h - padding_y : h - padding_x; // left&bottom padding if no y padding #fixthis
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

  translateNorm(x, y, graph_box = this.graphBox) {
    // Translate normalized coordinates to graph coordinates
    // domain: [0, 1] range: [left, right, top, bottom]
    return {
      x: x * graph_box.width + graph_box.left,
      y: y * graph_box.height + graph_box.top,
    };
  }

  drawValueGradient(n_bands = 6) {
    const h = this.legendThickness / n_bands;
    const gradient = this.ctx.createLinearGradient(0, this.graphBox.top, 0, this.graphBox.bottom);
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "black");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, n_bands * h, this.graphBox.bottom);
  }

  drawSatRainbow(n_bands = 6) {
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
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(this.graphBox.left, this.height - this.legendThickness, this.graphBox.right, this.height);
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

  stack_1d({ values_sorted }) {
    // assume values E [0, 1]

    // draw boxes, bin by bin
    const gap_size = 2;
    const tick_width = 10;
    const n_bins = 20;
    const stack_max = 10;
    const margin = gap_size + tick_width;
    const graph_W = this.width - margin;
    const graph_H = this.height - margin * 2;
    const cell_W = graph_W / 12 - gap_size;
    const cell_H = graph_H / n_bins - gap_size;

    const getX = n => margin + n * (cell_W + gap_size);
    const getY = n => n * (cell_H + gap_size);

    let start_idx = 0;
    for (let i = 0; i < n_bins; i++) {
      const lim = (i + 1) / n_bins;
      let end_idx = values_sorted.findIndex(v => v >= lim);
      if (end_idx === -1) end_idx = undefined;
      const stack_size = values_sorted.slice(start_idx, end_idx).length;
      const y = getY(i);

      // draw cells
      const n_cells = stack_size <= stack_max ? stack_size : stack_max;
      for (let j = 0; j < n_cells; j++) {
        const x = getX(j);
        this.ctx.fillRect(x, y, cell_W, cell_H);
      }
      // draw extra
      if (stack_size > n_cells) {
        // draw arrow, clockwise from top left
        this.ctx.beginPath();
        // top left
        let xA = getX(stack_max);
        let yA = y + cell_H / 3;
        this.ctx.moveTo(xA, yA);
        xA += cell_W / 3;
        this.ctx.lineTo(xA, yA);
        // top triangle corner
        yA = y;
        this.ctx.lineTo(xA, yA);
        // arrow tip
        xA += cell_W / 3 * 2;
        yA = y + cell_H / 2;
        this.ctx.lineTo(xA, yA);
        // bottom triangle corner
        xA = getX(stack_max) + cell_W / 3;
        yA = y + cell_H;
        this.ctx.lineTo(xA, yA);
        yA -= cell_H / 3;
        this.ctx.lineTo(xA, yA);
        // bottom left
        xA = getX(stack_max);
        this.ctx.lineTo(xA, yA);
        this.ctx.closePath();
        this.ctx.fill();

        // draw number
        this.ctx.font = "bold 12px monospace";
        this.ctx.textBaseline = "middle";
        const n_extra = stack_size - stack_max;
        this.ctx.fillText(n_extra, getX(stack_max + 1), y + 12);

      }
      if (end_idx === undefined) {
        break;
      } else {
        start_idx = end_idx;
      }

    }

    // draw vertical axis
    const axis_x = tick_width - .5;// crisp
    this.ctx.beginPath();
    this.ctx.moveTo(axis_x, 0);
    this.ctx.lineTo(axis_x, graph_H);
    this.ctx.stroke();
    //ticks
    for (let i = 0; i <= n_bins; i++) {
      const is_big = i % 10 === 0;
      this.ctx.beginPath();
      this.ctx.lineWidth = is_big ? 3 : 1;
      const y = getY(i) + 0.5; // crisp
      this.ctx.moveTo(axis_x, y);
      this.ctx.lineTo(is_big ? 0 : tick_width / 2, y);
      this.ctx.stroke();
    }

    this.ctx.lineWidth = 1;

    // draw horizontal axis;
    this.ctx.beginPath();
    this.ctx.moveTo(axis_x, graph_H + .5);
    this.ctx.lineTo(getX(stack_max) - gap_size, graph_H + .5);
    this.ctx.stroke();
    // dotted continuation
    this.ctx.beginPath();
    this.ctx.setLineDash([cell_W / 4, cell_W / 4]);
    this.ctx.moveTo(getX(stack_max) - gap_size, graph_H + .5);
    this.ctx.lineTo(graph_W, graph_H + .5);
    this.ctx.stroke();

    this.ctx.setLineDash([]);

    // ticks
    for (let i = 0; i <= 10; i++) {
      const is_big = i % 5 === 0;
      this.ctx.lineWidth = is_big ? 3 : 1;
      this.ctx.beginPath();
      const x = getX(i) - gap_size + 0.5;
      this.ctx.moveTo(x, graph_H);
      this.ctx.lineTo(x, is_big ? graph_H + margin : graph_H + margin / 2);
      this.ctx.stroke();
      if (is_big) { // numbers
        this.ctx.textAlign = "center";
        this.ctx.fillText(i, x, graph_H + margin * 1.6);
      }
    }
  }

  scatter_2d({ xy_pairs }) {
    // !!! x and y
    //draw graph box
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.width, 0);
    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);
    this.ctx.closePath();
    this.ctx.stroke();

    //draw axes
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height / 2);
    this.ctx.lineTo(this.width, this.height / 2);
    this.ctx.moveTo(this.width / 2, 0);
    this.ctx.lineTo(this.width / 2, this.height);
    this.ctx.stroke();

    // draw points
    const cell_H = 12;
    const cell_W = 12;
    const graph_box = new GraphGeometry(this.width, this.height, cell_W / 2, cell_H / 2);

    for (const pair of xy_pairs) {
      const { x, y } = this.translateNorm(pair.x.value, pair.y.value, graph_box);
      this.ctx.fillRect(x - cell_W / 2, y - cell_H / 2, cell_W, cell_H);
    }
  }

  not_implemented() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.width, 0);
    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.font = "bold 24px monospace";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("not implemented", this.width / 2, this.height / 2);
  }
}
