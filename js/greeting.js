const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginInput");
const greeting = document.querySelector(".greeting");

function paintName(savedName) {
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${savedName} :)`;
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.classList.remove("hidden");
    localStorage.setItem("username", username);
    paintName(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedName = localStorage.getItem("username");

function loadName() {
    if (savedName !== null) {
        paintName(savedName);
    } else {
        onLoginSubmit();
    }
}

loadName();
