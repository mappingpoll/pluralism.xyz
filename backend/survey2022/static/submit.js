const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", submit);

function submit() {
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

  // finally, get the email, if any
  const email = document.querySelector("#email").value;

  return { data, lang, email };
}
