// Option 1
// let dropdownElement = document.querySelector(".dropdown__value");
// let dropdownList = document.querySelector(".dropdown__list");
// let dropdownItems = document.querySelectorAll(".dropdown__item");


// let dropdownListFunc = (event) => {
//   dropdownList.classList.toggle("dropdown__list_active");
// }
// let dropdownItemFunc = (event) => {
//   text = event.currentTarget.textContent;
//   dropdownElement.textContent = text;
//   dropdownList.classList.remove("dropdown__list_active");
//   event.preventDefault();
// }

// dropdownItems.forEach(
//   element => element.addEventListener("click", dropdownItemFunc)
// )


// if (dropdownElement && dropdownList && dropdownItems) {
//   dropdownElement.addEventListener("click", dropdownListFunc);
// }


// Option 2
let dropdown = document.querySelector(".dropdown");


let dropdownItemFunc = (event) => {
  let currentTarget = event.currentTarget
  let text = currentTarget.textContent;
  let dropdownValue = document.querySelector(".dropdown__value");
  dropdownValue.textContent = text;
  event.preventDefault();
}

let dropdownFunc = (event) => {
  let dropdownList = event.currentTarget.lastElementChild;
  let dropdownItems = dropdownList.querySelectorAll(".dropdown__item");
  dropdownItems.forEach(
    element => element.addEventListener("click", dropdownItemFunc)
  )
  dropdownList.classList.toggle("dropdown__list_active");
}


if (dropdown) {
  dropdown.addEventListener("click", dropdownFunc);
}
