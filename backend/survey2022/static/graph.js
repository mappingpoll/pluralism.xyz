export class GraphGeometry {
  constructor(w, h, padding_x, padding_y = 0) {
    this.left = Graph.pixelPerfect(padding_x, 1);
    this.right = Graph.pixelPerfect(w - padding_y, 1, true);
    this.top = Graph.pixelPerfect(padding_y, 1);
    this.bottom =
      padding_y > 0
        ? Graph.pixelPerfect(h - padding_y, 1, true)
        : Graph.pixelPerfect(h - padding_x, 1, true); // left&bottom padding if no y padding #fixthis
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
    this.ctx.font = "bold 12px monospace";
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

  drawSatRainbow(n_bands = 3) {
    const h = this.legendThickness / n_bands;
    const cmy_deg = [60, 300, 180];

    for (let i = 0; i < n_bands; i++) {
      // make gradients
      const gradient = this.ctx.createLinearGradient(this.graphBox.left, 0, this.graphBox.right, 0);
      gradient.addColorStop(0, `hsl(${cmy_deg[i]}deg, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${cmy_deg[i]}deg, 0%, 50%)`);
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(this.graphBox.left, this.height - i * h - h, this.graphBox.right, h);
    }
  }

  drawHueRainbow() {
    const n_stops = 6;
    const gradient = this.ctx.createLinearGradient(this.graphBox.left, 0, this.graphBox.right, 0);
    for (let i = 0; i < n_stops; i++) {
      gradient.addColorStop(i / n_stops, `hsl(${(i / n_stops) * 360}deg, 100%, 50%)`);
    }
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(
      this.graphBox.left,
      this.height - this.legendThickness,
      this.graphBox.right,
      this.height
    );
  }

  scatterLS(colors, cellSize) {
    /// draw a scatter plot of lightness and saturation
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
    const gridW = Math.ceil(colors.length / gridH);

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
      row.sort((a, b) => b.s - a.s); // sort by saturation (l)
      for (let _x = 0; _x < gridW; _x++) {
        const { x, y } = this.translateNorm(_x  / gridW, 1 - (_y + 1) / gridH);

        const color = row[_x]
        if (color != null) {
        this.ctx.fillStyle = color.rgbString;

        this.ctx.fillRect(x, y, cellW, cellH);
        } else {
          // draw X
          this.ctx.beginPath()
          this.ctx.strokeStyle = "#DDD";
          this.ctx.moveTo(x, y);
          this.ctx.lineTo(x + cellW, y + cellH);
          this.ctx.moveTo(x + cellW, y);
          this.ctx.lineTo(x, y + cellH);
          this.ctx.stroke();
        }
      }
    }
    this.ctx.strokeStyle = "black";
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

    // has colors?
    let has_colors = false;
    if (values_sorted[0]?.color ?? false) has_colors = true;

    // assume values E [0, 1]
    const n_bins = 20;

    // build stacks
    function Stack(bin, values) {
      this.bin = bin;
      this.values = values;
      if (has_colors) {
        // sort by lightness
        this.values.sort((a, b) => a.color.l - b.color.l);
        // sort by saturation
        // this.values.sort((a, b) => a.color.s - b.color.s);
      }
      this.size = values.length;
      return this;
    }

    const stacks = [];

    let start_idx = 0;
    for (let i = 0; i < n_bins; i++) {
      const lim = 1 - (i + 1) / n_bins;
      const is_smaller_than_lim = has_colors ? (c) => c.point < lim : (c) => c.value < lim;
      let end_idx = values_sorted.findIndex(is_smaller_than_lim);
      if (end_idx === -1) end_idx = undefined;
      const stack = values_sorted.slice(start_idx, end_idx);
      stacks.push(new Stack(i, stack));
      if (end_idx === undefined) {
        break;
      } else {
        start_idx = end_idx;
      }
    }

    const max_stack_size = Math.max(...stacks.map(s => s.size));

    /// dimensions
    const gap_size = 1;
    const tick_width = 10;
    const margin = gap_size + tick_width;
    const graph_W = this.width - margin * 2;
    const graph_H = this.height - margin * 2;
    const cell_w = graph_W / max_stack_size - gap_size;
    const cell_h = graph_H / n_bins - gap_size;

    const getX = n => margin + n * (cell_w + gap_size);
    const getY = n => n * (cell_h + gap_size);

    for (const stack of stacks) {
      const i = stack.bin;
      const y = getY(i);

      // draw cells
      const n_cells = stack.size;
      for (let j = 0; j < n_cells; j++) {
        const x = getX(j);
        if(has_colors) {
          this.ctx.fillStyle = stack.values[j].color.rgbString;
        }
        this.ctx.fillRect(x, y, cell_w, cell_h);
      }
    }
    // reset fill style
    this.ctx.fillStyle = 'black';

    // draw vertical axis
    const axis_x = tick_width - 0.5; // crisp
    this.ctx.beginPath();
    this.ctx.moveTo(axis_x, 0);
    this.ctx.lineTo(axis_x, graph_H);
    this.ctx.stroke();
    //ticks
    for (let i = 0; i <= n_bins; i++) {
      const is_big = i % Math.floor(n_bins / 2) === 0;
      this.ctx.beginPath();
      this.ctx.lineWidth = is_big ? 2 : 1;
      const y = getY(i) + 0.5; // crisp
      this.ctx.moveTo(axis_x, y);
      this.ctx.lineTo(is_big ? 0 : tick_width / 2, y);
      this.ctx.stroke();
    }

    this.ctx.lineWidth = 1;

    // draw horizontal axis;
    this.ctx.beginPath();
    this.ctx.moveTo(axis_x, graph_H + 0.5);
    this.ctx.lineTo(getX(max_stack_size) - gap_size, graph_H + 0.5);
    this.ctx.stroke();
    // ticks
    const big_n = max_stack_size < 60 ? 5 : 10;
    const step = big_n === 5 ? 1 : 2;
    for (let i = 0; i <= max_stack_size; i+=step) {
      const is_big = i % big_n === 0;
      this.ctx.lineWidth = is_big ? 2 : 1;
      this.ctx.beginPath();
      const x = getX(i) - gap_size + 0.5;
      this.ctx.moveTo(x, graph_H);
      this.ctx.lineTo(x, is_big ? graph_H + margin : graph_H + margin / 2);
      this.ctx.stroke();
      if (is_big) {
        // numbers
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "top";
        this.ctx.fillText(i, x, this.height - 10);
      }
    }
  }

  scatter_2d({ xy_pairs }) {
    // !!! x and y
    //draw graph box
    this.drawBorder();

    //draw axes
    const h_2 = Graph.pixelPerfect(this.height / 2, this.ctx.lineWidth);
    const w_2 = Graph.pixelPerfect(this.width / 2, this.ctx.lineWidth);
    this.ctx.beginPath();
    this.ctx.moveTo(0.5, h_2);
    this.ctx.lineTo(this.width, h_2);
    this.ctx.moveTo(w_2, 0.5);
    this.ctx.lineTo(w_2, this.height - 0.5);
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

  averageColor(colors) {
    const n = colors.length;
    let r = 0,
      g = 0,
      b = 0;
    for (const color of colors) {
      r += color.r;
      g += color.g;
      b += color.b;
    }
    const average = {
      r: 255 * (r / n),
      g: 255 * (g / n),
      b: 255 * (b / n),
    };

    // draw average color
    this.ctx.fillStyle = `rgb(${average.r}, ${average.g}, ${average.b})`;
    this.ctx.fillRect(0, 0, this.width, this.height);

    //draw graph box
    this.drawBorder();
  }

  drawBorder(lineWidth = 1) {
    //draw graph box
    this.ctx.beginPath();
    this.ctx.lineWidth = lineWidth;
    const top = Graph.pixelPerfect(0, lineWidth);
    const bottom = Graph.pixelPerfect(this.height, lineWidth, true);
    const left = Graph.pixelPerfect(0, lineWidth);
    const right = Graph.pixelPerfect(this.width, lineWidth, true);
    this.ctx.moveTo(left, top);
    this.ctx.lineTo(right, top);
    this.ctx.lineTo(right, bottom);
    this.ctx.lineTo(left, bottom);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  static pixelPerfect(x, lineWidth = 1, neg = false) {
    if (neg) {
      return Math.ceil(x) - lineWidth / 2;
    } else {
      return Math.floor(x) + lineWidth / 2;
    }
  }
}
