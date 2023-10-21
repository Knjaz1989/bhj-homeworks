const authUrl = "https://students.netoservices.ru/nestjs-backend/auth";

const signin = document.getElementById("signin");
const signinForm = document.querySelector("#signin__form");
const welcome = document.getElementById("welcome");
const welcomeUserId = welcome.querySelector("#user_id");
const soredUserId = localStorage.getItem("id");
const logoutBtn = welcome.querySelector("#logout__btn");


function showWelcome (userId) {
  signin.classList.remove("signin_active");
  welcomeUserId.innerText = userId;
  welcome.classList.add("welcome_active");
}


signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const request = new XMLHttpRequest();
  const loginValue = signinForm.querySelector('[name="login"]').value;
  const passwordvalue = signinForm.querySelector('[name="password"]').value;
  console.log(loginValue, passwordvalue);
  request.open('POST', authUrl, false);
  request.setRequestHeader('Content-Type', 'application/json')
  request.send(JSON.stringify({"login": loginValue, "password": passwordvalue}));
  let response = JSON.parse(request.responseText);
  if (!("success" in response) || response.success != true) {
    alert("Неверный логин/пароль");
    signinForm.reset();
    return;
  }
  showWelcome(response["user_id"]);
  localStorage.setItem("id", response["user_id"]);
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("id");
  location.reload();
});


if (soredUserId) {
  showWelcome(soredUserId);
}
