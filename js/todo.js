const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


// 삭제 
function deleteTodo(e){
    const li = e.target.parentNode;
    li.remove();    
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}


function showTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.classList = "btn";
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);

    btn.addEventListener("click", deleteTodo);
}


function todoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoOb = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoOb);    
    showTodo(newTodoOb);
    saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(showTodo);
}
