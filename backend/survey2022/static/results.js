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
  const width = containerW;
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
      const result_div = document.createElement("div");
      result_div.classList.add("results-display");
      container.appendChild(result_div);

      const title = document.createElement("h3");
      result_div.appendChild(title);

      const question_text = document.createElement("div");
      result_div.appendChild(question_text)

      fetchQinfo(key).then(info => {
        title.innerText = info.title;
        question_text.innerHTML = info.topContent;

        // colors
        if (keyMap.colors.includes(key)) {
          const colors = parsed[key].map(({ value }) => value);

          const ctx0 = makeGraphCtx({ containerW: container.clientWidth, marginBottom: "2em" });
          result_div.appendChild(ctx0.canvas);

          const ctx1 = makeGraphCtx({ containerW: container.clientWidth, marginBottom: "2em" });
          result_div.appendChild(ctx1.canvas);

          ctx0.graph.lightSat(
            colors.map(c => c.clone()),
            12
          );
          ctx1.graph.mosaic(colors.map(c => c.clone()));
        }

        if (keyMap.points.includes(key)) {
          const graphArea = document.createElement("div");
          graphArea.classList.add("graph-area");
          result_div.appendChild(graphArea);

          // text
          const labels = document.createElement("div");
          labels.classList.add("stack-labels")
          graphArea.appendChild(labels);
          if (info.yRange != null) {
            const range = JSON.parse(info.yRange)
            const unit = info.unit ?? ""
            const range_min = range[0] + unit;
            const range_mid = (range[1] - range[0]) / 2 + unit;
            const range_max = range[1] + unit;
            for (const r of [range_min, range_mid, range_max]) {
              const d = document.createElement('div')
              d.innerText = r;
              labels.appendChild(d)
            }
          } else {
            const label_min = info.scaleLabelMin;
            const label_mid = info.scaleLabelZero !== "missing translation" ? info.scaleLabelZero : "";
            const label_max = info.scaleLabelMax;
            for (const l of [label_min, label_mid, label_max]) {
              const d = document.createElement('div');
              d.innerHTML = l;
              labels.appendChild(d);
            }
          }

          const ctx0 = makeGraphCtx({
            containerW: container.clientWidth / 2,
            containerH: container.clientWidth,
          });
          graphArea.appendChild(ctx0.canvas);


          const values = parsed[key].map(({ value }) => value);
          const values_sorted = values.sort((a, b) => a - b);

          ctx0.graph.stack_1d({ values_sorted });


        }
      });
    }
  })
  .catch(e => console.error(e));
