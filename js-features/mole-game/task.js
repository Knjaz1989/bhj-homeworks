const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadsCount;
let lostsCount;


refreshCounts = () => {
  deadsCount = 0;
  lostsCount = 0;
}

getHole = index => document.getElementById(`hole${index}`)

showAlert = (message) => {
  refreshCounts();
  dead.textContent = deadsCount;
  lost.textContent = lostsCount;
  alert(message);
}


refreshCounts();
for (let index = 1; index < 10; index++) {
  let hole = getHole(index);
  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      deadsCount += 1;
      dead.textContent = deadsCount;
      if (deadsCount === 10) {
        showAlert("Победа!");
      }
    } else {
      lostsCount += 1;
      lost.textContent = lostsCount;
      if (lostsCount == 5) {
        showAlert("Вы проиграли!");
      }
    }
  };
}