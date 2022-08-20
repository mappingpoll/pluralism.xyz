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
    for (const { key, value } of user.data.data) {
      const datum = { value, id: user.id, email: user.data?.email };
      parsed[key] = [...(parsed[key] || []), datum];
    }
  }
  return parsed;
}

function makeGraphCanvas(containerW) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = containerW * 0.8;
  const graph = new Graph(canvas, 18);
  return { canvas, graph };
}

const container = document.querySelector(".results");

fetchResults()
  .then(data => {
    const parsed = parse(data.rows);

    // colors
    for (const key of keyMap.colors) {
      const div = document.createElement("div");
      div.classList.add("results-display");
      const title = document.createElement("h3");

      fetchQinfo(key).then(info => {
        title.innerText = info.title;
      });

      const cmyColors = parsed[key].map(({ value }) => value);
      const hslColors = cmyColors.map(Color.cmyToHsl);

      const { canvas, graph } = makeGraphCanvas(container.clientWidth);
      graph.lightSat(cmyColors, 12);

      const { canvas: canvas2, graph: graph2 } = makeGraphCanvas(container.clientWidth);
      graph2.mosaic(hslColors);

      div.appendChild(title);
      div.appendChild(canvas);
      div.appendChild(canvas2);
      container.appendChild(div);
    }
  })
  .catch(e => console.error(e));
