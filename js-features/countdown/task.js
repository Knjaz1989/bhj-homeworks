let timer = document.getElementById("timer");
let timerStart = Number(timer.textContent);
let intervalId = null;


decreaseTimer = () => {
  let result = new Date(timerStart * 1000).toISOString().slice(11, 19);
  timer.textContent = result;
  if (!timerStart) {
    // alert("Вы победили в конкурсе!");
    location.assign("https://w.forfun.com/fetch/99/9972d7178e02ed6c329b815b2186a549.jpeg?download=animals-gepardi-detenishi-draka-trava-igrivii-96862.jpeg")
    clearInterval(intervalId);
  }
  timerStart -= 1;
}

intervalId = setInterval(decreaseTimer, 1000);
