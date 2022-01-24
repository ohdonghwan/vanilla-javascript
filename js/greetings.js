const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null){
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem(USER_NAME, username);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USER_NAME);
    greeting.innerText = `Hello ${username}`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


