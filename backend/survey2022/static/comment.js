import { getQuestionKey } from "./helpers.js";

const commentBtn = document.getElementById("comment-btn");
const commentModal = document.querySelector(".comment-modal");
const textarea = commentModal.firstChild;
const okBtn = commentModal.lastChild;

const question_num = getQuestionKey();
const commentKey = `comment-${question_num}`;

const storedComment = window.localStorage.getItem(commentKey);
if (storedComment) textarea.value = storedComment;

let modalVisible = false;

function storeComment() {
  const comment = textarea.value;
  window.localStorage.setItem(commentKey, comment);
}

function toggleModalVisible() {
  if (!modalVisible) {
    commentModal.classList.remove("hidden");
    modalVisible = true;
  } else {
    commentModal.classList.add("hidden");
    modalVisible = false;
  }
}

commentBtn.addEventListener("click", toggleModalVisible);

okBtn.addEventListener("click", () => {
  storeComment();
  toggleModalVisible();
});

textarea.addEventListener("blur", storeComment);

window.addEventListener("keydown", e => {
  if (modalVisible && e.key === "Escape") {
    storeComment();
    toggleModalVisible();
  }
});
