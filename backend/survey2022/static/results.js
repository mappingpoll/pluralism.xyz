import { cmyToHsl, cmyToRgb } from "./helpers.js";

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

function lightSatGraph(canvasEl, answers) {
  const cmyColors = answers.map(({ value }) => value);
  const canvas = canvasEl.getContext("2d");
  const { width, height } = canvasEl;

  const cellWidth = 12;
  const cellHeight = 12;

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
  for (let i = 0; i < cmyColors.length; i++) {
    const { s, l } = cmyToHsl(cmyColors[i]);
    const x = (1 - s) * width;
    const y = (1 - l) * height;
    const { r, g, b } = cmyToRgb(cmyColors[i]);
    canvas.fillStyle = `rgb(${r}, ${g}, ${b})`;
    canvas.fillRect(x, y, cellWidth, cellHeight);

    // add email
    if (answers[i]?.email === "ouennassa@gmail.com") {
      canvas.font = "10px monospace";
      canvas.fillStyle = "black";
      canvas.fillText(answers[i].email, x + cellWidth, y + cellHeight);
    }
  }
}

const container = document.querySelector(".results");
const keyMap = window.__keyMap;

fetchResults()
  .then(data => {
    const answers = parse(data.rows);
    // colors
    for (const key of keyMap.colors) {
      const div = document.createElement("div");
      div.classList.add("results-display");
      const title = document.createElement("h3");

      fetchQinfo(key).then(info => {
        title.innerText = info.title;
      });

      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = container.clientWidth * 0.8;
      const answerColors = answers[key];
      lightSatGraph(canvas, answerColors);

      div.appendChild(title);
      div.appendChild(canvas);
      container.appendChild(div);
    }
  })
  .catch(e => console.error(e));
