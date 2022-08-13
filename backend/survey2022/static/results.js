import { cmyToHsl } from "./helpers.js";

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
    for (const [key, value] of Object.entries(user.data.data)) {
      const datum = { value: value.value, id: user.id };
      parsed[key] = [...(parsed[key] || []), datum];
    }
  }
  return parsed;
}

function makeLumSatGraph(canvasEl, cmyColors) {
  const lumSat = [];

  const domain = {
    l: { min: Infinity, max: -Infinity },
    s: { min: Infinity, max: -Infinity },
  };
  const range = cmyColors.length;

  for (const cmy of cmyColors) {
    const hsl = cmyToHsl(cmy);
    const { l, s } = hsl;
    domain.l.min = Math.min(domain.l.min, l);
    domain.l.max = Math.max(domain.l.max, l);
    domain.s.min = Math.min(domain.s.min, s);
    domain.s.max = Math.max(domain.s.max, s);

    lumSat.push(hsl);
  }

  const canvas = canvasEl.getContext("2d");
  const { width, height } = canvasEl;

  const cellWidth = 12;
  const cellHeight = 12;

  // draw grid
  /*   canvas.strokeStyle = "lightgray";
  canvas.lineWidth = 1;
  canvas.beginPath();
  for (let i = 0; i <= range; i++) {
    canvas.moveTo(0, i * cellHeight);
    canvas.lineTo(width, i * cellHeight);
    canvas.moveTo(i * cellWidth, 0);
    canvas.lineTo(i * cellWidth, height);
  }
  canvas.stroke();
  canvas.closePath();
 */

  {
    // draw saturation rainbow
    const w = width;
    const h = 3;
    const colors = 6;
    const gap = h * colors;
    for (let i = 0; i < colors; i++) {
      // make gradients
      const gradient = canvas.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, `hsl(${i * 60}deg, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${i * 60}deg, 0%, 50%)`);
      canvas.fillStyle = gradient;
      canvas.fillRect(gap, height - i * h - h, w, h);
    }
    // draw value gradient
    const gradient = canvas.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "black");
    canvas.fillStyle = gradient;
    canvas.fillRect(0, 0, colors * h, height - gap);
  }
  // draw colored squares
  for (let i = 0; i < range; i++) {
    const { h, s, l } = lumSat[i];
    const x = (1 - s) * width;
    const y = (1 - l) * height;
    canvas.fillStyle = `hsl(${h}deg, ${s * 100}%, ${l * 100}%)`;
    canvas.fillRect(x, y, cellWidth, cellHeight);
  }
}

const container = document.querySelector(".results");
const keyMap = window.__keyMap;

fetchResults()
  .then(data => {
    const answers = parse(data.rows);
    // colors
    for (const key of keyMap.colors) {
      const answerColors = answers[key].map(({ value }) => value);
      const div = document.createElement("div");
      div.classList.add("results-display");
      const title = document.createElement("h3");

      fetchQinfo(key).then(info => {
        title.innerText = info.title;
      });

      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = container.clientWidth * 0.8;
      makeLumSatGraph(canvas, answerColors);

      div.appendChild(title);
      div.appendChild(canvas);
      container.appendChild(div);
    }
  })
  .catch(e => console.error(e));
