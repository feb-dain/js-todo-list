let modalAllTodos = document.querySelector(".del-all-todos")

const modalAllTodosInner = document.createElement("div");
modalAllTodosInner.classList = "modal-inner";

const modalAllTodosMessage = document.createElement("p");
modalAllTodosMessage.innerText = "정말 모든 할 일 목록을 삭제하시겠습니까?";

const btnDelAllTodosY = document.createElement("button");
btnDelAllTodosY.innerText = "확인";
const btnDelAllTodosN = document.createElement("button");
btnDelAllTodosN.innerText = "취소";

modalAllTodosInner.appendChild(modalAllTodosMessage);
modalAllTodosInner.appendChild(btnDelAllTodosY);
modalAllTodosInner.appendChild(btnDelAllTodosN);
modalAllTodos.appendChild(modalAllTodosInner);