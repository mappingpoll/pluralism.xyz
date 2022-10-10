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

function makeGraphCtx(containerW) {
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

      const colors = parsed[key].map(({ value }) => value);

      const ctx0 = makeGraphCtx(container.clientWidth);
      const ctx1 = makeGraphCtx(container.clientWidth);
      const ctx2 = makeGraphCtx(container.clientWidth);

      ctx0.graph.lightSat(
        colors.map(c => c.clone()),
        12
      );
      ctx1.graph.mosaic(colors.map(c => c.clone()));
      ctx2.graph.mosaic_by_hue(colors.map(c => c.clone()));

      div.appendChild(title);
      div.appendChild(ctx0.canvas);
      div.appendChild(ctx1.canvas);
      div.appendChild(ctx2.canvas);
      container.appendChild(div);
    }
  })
  .catch(e => console.error(e));
