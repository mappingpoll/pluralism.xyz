import { Color } from "./color.js";
import { keyMap } from "./const.js";
import { Graph } from "./graph.js";

async function fetchResults() {
  const res = await fetch("/data");
  return await res.json();
}

async function fetchQinfo(key) {
  const res = await fetch(`/question/${key}`);
  return await res.json();
}

function parse(rows) {
  const parsed = {};
  for (const user of rows) {
    for (let { key, value } of user.data.data) {
      if (key in keyMap.colors) value = new Color(value);
      const datum = { value, id: user.id, email: user.data?.email };
      parsed[key] = [...(parsed[key] || []), datum];
    }
  }
  return parsed;
}

const general_graph_margin_factor = 0.8;

function getScaledCanvasCtx(canvas, css_w, css_h) {
  canvas.style.width = css_w + "px";
  canvas.style.height = css_h + "px";
  const px_ratio = window.devicePixelRatio;
  canvas.width = Math.floor(css_w * px_ratio);
  canvas.height = Math.floor(css_h * px_ratio);
  const ctx = canvas.getContext("2d");
  ctx.scale(px_ratio, px_ratio);
  return ctx;
}

function makeGraphCtx({ containerW, containerH, marginBottom = "0", legendThickness = 18, labels, range }) {
  const canvas = document.createElement("canvas");
  canvas.style.marginBottom = marginBottom;
  const width = containerW * general_graph_margin_factor;
  const height = containerH ?? width;
  const ctx = getScaledCanvasCtx(canvas, width, height)

  const graph = new Graph({ ctx, width, height, legendThickness, labels, range });
  return { canvas, graph };
}


const container = document.querySelector(".results");

fetchResults()
  .then(data => {
    const parsed = parse(data.rows);

    for (const key of keyMap.all) {

      // colors
      if (keyMap.colors.includes(key)) {
        const div = document.createElement("div");
        div.classList.add("results-display");
        const title = document.createElement("h3");

        fetchQinfo(key).then(info => {
          title.innerText = info.title;
        });

        const colors = parsed[key].map(({ value }) => value);

        const ctx0 = makeGraphCtx({ containerW: container.clientWidth, marginBottom: "2em" });
        const ctx1 = makeGraphCtx({ containerW: container.clientWidth, marginBottom: "2em" });

        ctx0.graph.lightSat(
          colors.map(c => c.clone()),
          12
        );
        ctx1.graph.mosaic(colors.map(c => c.clone()));

        div.appendChild(title);
        div.appendChild(ctx0.canvas);
        div.appendChild(ctx1.canvas);
        container.appendChild(div);
      }

      if (keyMap.points.includes(key)) {
        const div = document.createElement("div");
        div.classList.add("results-display");
        const title = document.createElement("h3");
        const graphArea = document.createElement("div");
        graphArea.classList.add("graph-area");

        div.appendChild(title);
        div.appendChild(graphArea);

        fetchQinfo(key).then(info => {

          title.innerText = info.title;

          const points = parsed[key].map(({ value }) => value);



          const ctx0 = makeGraphCtx({
            containerW: container.clientWidth * 0.8,
            containerH: container.clientWidth,
          });

          const values_sorted = points.sort((a, b) => a - b);
          const n_bins = (() => {
            let n = Math.ceil(values_sorted.length / 2)

            return n % 2 === 0 ? n : n + 1;

          })();

          ctx0.graph.stack_1d({ values_sorted, n_bins });

          // text
          let range;
          try { range = JSON.parse(info.yRange) } catch { }
          const unit = info.unit ?? ""
          const range_nums = document.createElement("div");
          const labels = document.createElement("div");

          range_nums.classList.add("range-nums");
          const range_min = range != null ? range[0] + unit : `0${unit}`;
          const range_mid = range != null ? (range[1] - range[0]) / 2 + unit : `50${unit}`;
          const range_max = range != null ? range[1] + unit : `100${unit}`;
          for (const r of [range_min, range_mid, range_max]) {
            const d = document.createElement('div')
            d.innerText = r;
            range_nums.appendChild(d)
          }
          labels.classList.add("stack-labels")
          const label_min = info.scaleLabelMin !== "missing translation" ? info.scaleLabelMin : info.topContent;
          const label_mid = info.scaleLabelZero !== "missing translation" ? info.scaleLabelZero : "";
          const label_max = info.scaleLabelMax !== "missing translation" ? info.scaleLabelMax : "";
          for (const l of [label_min, label_mid, label_max]) {
            const d = document.createElement('div');
            d.innerHTML = l;
            labels.appendChild(d);
          }

          graphArea.appendChild(labels);
          graphArea.appendChild(range_nums);
          graphArea.appendChild(ctx0.canvas);

          container.appendChild(div);
        });
      }
    }
  })
  .catch(e => console.error(e));
