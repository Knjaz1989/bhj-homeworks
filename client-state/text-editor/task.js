const textarea = document.getElementById("editor");
const refreshbutton = document.getElementById("refresh-button");
let textareaLocalStorage = localStorage.textarea;

if (textareaLocalStorage) {
  textarea.value = textareaLocalStorage;
}

textarea.addEventListener("input", () => {
    let textareaText = textarea.value.trim();
    localStorage.setItem("textarea", textareaText);
  }
);

refreshbutton.addEventListener("click", () => {
  textarea.value = "";
  localStorage.removeItem("textarea");
});