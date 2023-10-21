const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

const modalClosed = localStorage.getItem("modalClosed");


if (modalClosed !== "true") {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  localStorage.modalClosed = true;
  modal.classList.remove("modal_active");
});
