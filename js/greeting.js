const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const list = document.querySelector("#list");
let todoForm = document.querySelector("#todo-form"); 
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden"; 
const USERNAME_KEY = "username";

const user = document.getElementById("user-name");

// 모달 메시지
let modalM1 = document.querySelector(".modalM1");
let modalM2 = document.querySelector(".modalM2");

function onSubmit(e) {
    e.preventDefault(); 
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    if(username.length > 4){
        modalM1.classList.add("hidden");
        modalM2.classList.remove("hidden");
        modal.classList.remove("hidden");

        loginForm.classList.remove(HIDDEN);
        loginForm.addEventListener("submit", onSubmit);
    }else{
        localStorage.setItem(USERNAME_KEY, username); 
        groupGreeting(username);
    }
}

function groupGreeting(username){
    list.classList.remove(HIDDEN);
    todoForm.classList.remove(HIDDEN);
    greeting.innerText = `${username}님의 오늘 할 일`; 
    greeting.classList.remove(HIDDEN);

    user.innerText = username;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null ){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onSubmit);

    user.innerText = "이름";
}else{
    groupGreeting(savedUsername);
}

