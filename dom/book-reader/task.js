// task 1

// const fontSizes = document.querySelectorAll(".font-size");
// const book = document.getElementById("book");

// fontSizes.forEach(
//   element => element.addEventListener(
//     "click",
//     () => {
//       fontSizes.forEach(element => element.classList.remove("font-size_active"))
//       const dataSize = element.getAttribute("data-size")
//       element.classList.add("font-size_active");
//       book.classList = ["book"]
//       if (dataSize === "small") {
//         book.classList.add("font-size_small");
//       } else if (dataSize === "big") {
//         book.classList.add("font-size_big");
//       }
//     }
//   )
// );


// task 2

const book = document.getElementById("book");
const bookControls = document.querySelectorAll(".book__control");


removeBookClass = (partName) => {
  const classes = book.classList;
  classes.forEach(
    classItem => {
      if (classItem.indexOf(partName) > -1) {
        book.classList.remove(classItem);
      }
    }
  )
}

changeBook = (element, partName, dataAttr, data1, data2, data3=null) => {
      removeBookClass(partName);
      const data = element.getAttribute(dataAttr)
      if (data === data1) {
        book.classList.add(`${partName}-${data1}`);
      } else if (data === data2) {
        book.classList.add(`${partName}-${data2}`);
      } else if (data3 && data === data3) {
        book.classList.add(`${partName}-${data3}`);
      }
}

addClick = (element, childList, parent, activeclass) => {
  element.addEventListener(
    "click",
    () => {
      childList.forEach(child => child.classList.remove(activeclass));
      if (parent.classList.contains("book__control_font-size")) {
        changeBook(element, "book_fs", "data-size", "small", "big");
      } else if (parent.classList.contains("book__control_color")) {
        changeBook(element, "book_color", "data-text-color", "black", "gray", "whitesmoke");
      } else {
        changeBook(element, "book_bg", "data-bg-color", "black", "gray", "white");
      }
      element.classList.add(activeclass);
    }
  )
}

bookControls.forEach(
  element => {
    const childrenA = element.querySelectorAll("a");
    childrenA.forEach(
      (child, index, childList) => {
        if (child.classList.contains("font-size")) {
          addClick(child, childList, element, "font-size_active");
        } else {
          addClick(child, childList, element, "color_active");
        }
      }
    );
    console.log(childrenA);
  }
)
