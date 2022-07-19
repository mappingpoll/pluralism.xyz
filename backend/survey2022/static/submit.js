const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", submit);

let isSubmitted = false;

function submit() {
  const a = document.createElement("a")
  a.href = "/results";

  a.click();
  return

  // TODO
  if (!isSubmitted) {
    submitBtn.style.opacity = "0.5";
    isSubmitted = true;
    const data = collect();
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const url = `${window.origin}/submit`;
    console.log(data);
    fetch(url, init).then(res => {
      if (res.status === 200) window.location.assign(`${window.location.origin}/results`);
      else {
        console.log("uh oh");
        submitBtn.style.opacity = "1";
        isSubmitted = false;
      }
    });
  }
}

function collectLocalStorage() {
  const data = [];
  for (const i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    data.push({ key, value });
  }
  return data;
}
