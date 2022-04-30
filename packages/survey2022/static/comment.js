const textarea = document.querySelector("textarea");

const storedComment = window.localStorage.getItem("comment");

if (storedComment) textarea.value = storedComment;

textarea.addEventListener("blur", storeComment);

function storeComment() {
  const comment = textarea.value;
  window.localStorage.setItem("comment", comment);
}
