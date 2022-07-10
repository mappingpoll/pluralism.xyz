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

function collect() {
  const data = { questions: {}, form: {} };
  let num = 0;
  while (++num <= OPTIONS.lastQ) {
    const value = window.localStorage.getItem(num.toString());
    if (value == null) continue;
    data.questions[num] = {};
    data.questions[num].points = JSON.parse(value);
    data.questions[num].num = num;
  }
  const email = document.querySelector("input[type=email]").value;

  if (email) data.form.email = email;

  return data;
}
