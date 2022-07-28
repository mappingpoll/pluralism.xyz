const emailInput = document.querySelector("#email");
const commentInput = document.querySelector("#comment");

const email = window.localStorage.getItem("email") ?? "";
emailInput.value = email;
const comment = window.localStorage.getItem("comment") ?? "";
commentInput.value = comment;

function onblur(event) {
  window.localStorage.setItem(event.target.name, event.target.value);
}

emailInput.addEventListener("blur", onblur);
commentInput.addEventListener("blur", onblur);

const submitBtn = document.querySelector("button");
const spinner = document.querySelector(".spinner");

function submit() {
  if (submitBtn.disabled) {
    return;
  }
  submitBtn.disabled = true;
  spinner.classList.remove("hidden");

  const data = collectLocalStorage();
  const req = new Request("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  fetch(req).then(res => {
    // if the server returns a redirect, follow it
    if (res.redirected) window.location.assign(res.url);
    else window.location.assign("/results");
  });
}

function collectLocalStorage() {
  const data = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    data.push({ key, value });
  }

  // also get the user's language from the cookies or from the browser if not set
  const lang =
    document.cookie
      .split(";")
      .find(c => c.startsWith("lang="))
      ?.split("=")[1]
      .slice(0, 2) ?? navigator.language.slice(0, 2);

  // finally, get the email and comment, if any
  const email = emailInput.value;
  const comment = commentInput.value;

  return { data, lang, email, comment };
}

submitBtn.addEventListener("click", submit);
