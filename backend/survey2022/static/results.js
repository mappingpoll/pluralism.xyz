async function fetchResults() {
  const res = await fetch("/data");
  return await res.json();
}

function parse(data) {
  const result = {};
  for (const user of data) {
    for (const entry of user.data) {
      const { key, value } = entry;
      result[key] = [...(result[key] ?? []), value];
    }
  }
  return result;
}

const container = document.querySelector(".results");

fetchResults().then(data => {
  const answers = parse(data);

  for (const { key, value } of Object.entries(answers)) {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = key;
    div.appendChild(title);

    const display = document.createElement("div");
    display.classList.add("display");
    div.appendChild(display);

    display.textContent = value.length;

    container.appendChild(div);
  }
});
