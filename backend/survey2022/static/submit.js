const submitBtn = document.querySelector(".forward");

submitBtn.addEventListener("click", submit);
submitBtn.addEventListener("touchend", submit);

let isSubmitted = false;

function submit() {
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
  const comment = window.localStorage.getItem("comment");
  const form = document.querySelector("form");
  const { gallerySubmission, email } = Object.fromEntries(new FormData(form).entries());

  if (comment) data.form.comment = comment;
  if (gallerySubmission === "yes") data.form.submittedInGallery = true;
  if (email) data.form.email = email;

  return data;
}
