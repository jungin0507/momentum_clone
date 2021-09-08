const login_form = document.querySelector("#login_form");
const login_input = document.querySelector(".login_input");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = login_input.value;
  login_form.parentNode.removeChild(login_form);
  localStorage.setItem("username", username);
  displayName(username);
}

function displayName(username) {
  const login_info = document.createElement("h1");
  login_info.innerText = `Hello ${username}!`;
  document.body.appendChild(login_info);
}

const saved_name = localStorage.getItem("username");

if (saved_name) {
  login_form.parentNode.removeChild(login_form);
  displayName(saved_name);
} else {
  login_form.addEventListener("submit", onLoginSubmit);
}
