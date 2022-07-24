async function fetchResults() {
  const res = await fetch("/data");
  return await res.json();
}

function parse(rows) {
  const result = {};
  for (const user of rows) {
    for (const entry of user.data.data) {
      const { key, value } = entry;
      result[key] = [...(result[key] ?? []), value];
    }
  }
  return result;
}

const container = document.querySelector(".results");
const keys = window.__keys;

fetchResults()
  .then(data => {
    const answers = parse(data.rows);

    for (const [key, value] of Object.entries(answers)) {
      const div = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = key;
      div.appendChild(title);

      const display = document.createElement("div");
      display.classList.add("results-display");
      div.appendChild(display);

      display.textContent = value.length;

      container.appendChild(div);
    }
  })
  .catch(e => console.error(e));
