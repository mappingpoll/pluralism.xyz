import { Color } from "./color.js";
import { keyMap } from "./const.js";
import { Graph } from "./graph.js";

const results = document.querySelector(".results");

const menu = document.querySelector(".results-menu");
const select_x = menu.querySelector("#select-x");
const select_y = menu.querySelector("#select-y");
const pairing_graph = document.querySelector(".pairing-graph");
keyMap.all.forEach(k => {
  const option = document.createElement("option");
  option.value = k;
  select_x.appendChild(option);
  select_y.appendChild(option.cloneNode(true));
});
[select_x, select_y].forEach(s => s.addEventListener("change", handleSelectChange));

// fetch data; populate selects; draw graphs
fetchResults()
  .then(data => {
    const parsed = parse(data.rows);

    for (const key of keyMap.all) {
      console.log(key);
      const result_div = document.createElement("div");
      result_div.classList.add("results-display");
      results.appendChild(result_div);

      const title = document.createElement("h3");
      result_div.appendChild(title);

      const question_text = document.createElement("div");
      result_div.appendChild(question_text);

      fetchQinfo(key).then(info => {
        title.innerText = info.title;
        question_text.innerHTML = info.topContent;

        // add to select options
        [select_x, select_y].forEach(s => s.querySelector(`option[value="${key}"]`).innerHTML = info.title);

        // colors
        if (keyMap.colors.includes(key)) {
          const colors = parsed[key].map(({ value }) => value);

          const ctx0 = makeGraphCtx({ containerW: results.clientWidth, marginBottom: "2em" });
          result_div.appendChild(ctx0.canvas);

          const ctx1 = makeGraphCtx({ containerW: results.clientWidth, marginBottom: "2em" });
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
          labels.classList.add("stack-labels");
          graphArea.appendChild(labels);
          const { min, mid, max } = extractLabels(info);
          for (const r of [min, mid, max]) {
            const d = document.createElement('div');
            d.innerText = r;
            labels.appendChild(d);
          }

          const ctx0 = makeGraphCtx({
            containerW: results.clientWidth / 2,
            containerH: results.clientWidth,
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

function extractLabels(info) {
  let min, mid, max = "";
  if (info.yRange != null) {
    const range = JSON.parse(info.yRange);
    const unit = info.unit ?? "";
    min = range[0] + unit;
    mid = (range[1] - range[0]) / 2 + unit;
    max = range[1] + unit;
  } else {
    min = info.scaleLabelMin;
    mid = info.scaleLabelZero !== "missing translation" ? info.scaleLabelZero : "";
    max = info.scaleLabelMax;
  }

  return { min, mid, max };
}

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
  window.parsed = parsed;
  return parsed;
}

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
  const ctx = getScaledCanvasCtx(canvas, width, height);

  const graph = new Graph({ ctx, width, height, legendThickness, labels, range });
  return { canvas, graph };
}

function handleSelectChange(e) {
  const target = e.target;
  const other = target === select_x ? select_y : select_x;

  updateOptions(target.value, other);

  const x_key = select_x.value;
  const y_key = select_y.value;

  const data = window.parsed;

  make_pairing_graph({ x_key, y_key, data, container: pairing_graph });

}

function updateOptions(selected_key, other_select) {
  let active_keys = keyMap.all;
  if (keyMap.colors.includes(selected_key)) active_keys = keyMap.colors;
  if (keyMap.points.includes(selected_key)) active_keys = keyMap.points;
  if (selected_key === keyMap.pcode) active_keys = [keyMap.pcode];

  // disable unrelated options
  [select_x, select_y].forEach(s => {
    for (const option of s.childNodes) {
      option.disabled = option.value !== "" && !active_keys.includes(option.value);
    }
  });

  // deselect in other if same
  if (other_select.value === selected_key) {
    other_select.value = "";
  }
}

function make_pairing_graph({ x_key, y_key, data, container }) {
  if (!x_key || !y_key || !data) return;
  // combine x and y data into a single array of objects
  const x_data = data[x_key];
  const y_data = data[y_key];

  // get labels
  if (keyMap.points.includes(x_key)) {
    fetchQinfo(x_key).then(x_info => {
      const x_min = document.createElement('div');
      const x_max = document.createElement('div');
      x_min.classList.add('label-x-min');
      x_max.classList.add('label-x-max');
      const { max, min } = extractLabels(x_info);
      x_min.innerHTML = min;
      x_max.innerHTML = max;
      container.appendChild(x_min);
      container.appendChild(x_max);
    });
    fetchQinfo(y_key).then(y_info => {
      const y_min = document.createElement('div');
      const y_max = document.createElement('div');
      y_min.classList.add('label-y-min');
      y_max.classList.add('label-y-max');
      const { max, min } = extractLabels(y_info);
      y_min.innerHTML = min;
      y_max.innerHTML = max;
      container.appendChild(y_min);
      container.appendChild(y_max);
    });
  }

  // find the intersection of x and y data
  const xy_pairs = x_data.reduce((acc, x) => {
    const y = y_data.find(y => y.id === x.id);
    if (y) acc.push({ x, y });
    return acc;
  }, []);

  // clear container
  container.innerHTML = "";

  const { canvas, graph } = makeGraphCtx({ containerW: container.clientWidth * .8 });

  if (keyMap.points.includes(x_key) && keyMap.points.includes(y_key)) graph.scatter_2d({ xy_pairs });
  else graph.not_implemented();

  const graph_div = document.createElement('div');
  graph_div.classList.add('graph-div');
  graph_div.appendChild(canvas);
  container.appendChild(graph_div);

}

