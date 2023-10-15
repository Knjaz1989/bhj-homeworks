// Task 1

// startRotator = (className) => {
//   const rotator = document.querySelectorAll(className);
//   rotator.forEach(element => 
//     {
//       const childs = element.children;
//       let childsArray = Array.from(childs);
//       setInterval(
//         () => {
//           const firstElenent = childsArray.shift();
//           firstElenent.classList.remove("rotator__case_active");
//           childsArray[0].classList.add("rotator__case_active");          
//           childsArray.push(firstElenent);
//         },
//         1000
//       )
//     }  
//   )
// };


// startRotator(".rotator")


// Task 2

timer = (childsArray) => {
  const firstElenent = childsArray.shift();
  const secondElenent = childsArray[0];
  const color = secondElenent.getAttribute("data-color");
  const dataSpeed = secondElenent.getAttribute("data-speed");
  setTimeout(
    () => {
      firstElenent.classList.remove("rotator__case_active");
      secondElenent.style.color = color;
      secondElenent.classList.add("rotator__case_active");          
      childsArray.push(firstElenent);
      timer(childsArray);
    }, 
    dataSpeed
    )
}


startRotator = (className) => {
  const rotator = document.querySelectorAll(className);
  rotator.forEach(element => 
    {
      const childs = element.children;
      let childsArray = Array.from(childs);
      timer(childsArray);
    }  
  )
};


startRotator(".rotator")