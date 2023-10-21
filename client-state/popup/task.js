const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");
const cookieName = "modalClosed";

const modalClosed = getCookieValue(cookieName);


function getCookieValue (name) {
  let cookies = document.cookie.split("; ");
  let cookie = cookies.find(c => c.startsWith(name + "="));
  if (cookie) {
    return cookie.substring(name.length + 1);
  }
}


if (modalClosed !== "true") {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  document.cookie = cookieName + "=true";
  modal.classList.remove("modal_active");
});
