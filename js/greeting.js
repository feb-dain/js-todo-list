const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const list = document.querySelector("#list");
let todoForm = document.querySelector("#todo-form"); 
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden"; 
const USERNAME_KEY = "username";


function onSubmit(e) {
    e.preventDefault(); 
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    groupGreeting(username);
    
}

function groupGreeting(username){
    list.classList.remove(HIDDEN);
    todoForm.classList.remove(HIDDEN);
    greeting.innerText = `${username}님의 오늘 할 일`; 
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null ){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onSubmit);
}else{
    groupGreeting(savedUsername);
}

