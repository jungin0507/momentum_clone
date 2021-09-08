const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todo_list";
let todos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function foo(element) {
  console.log(element.id);
}

function deleteTodo(event) {
  const deleteItem = event.target.parentNode;

  todos = todos.filter(function foo(element) {
    return String(element.id) !== deleteItem.id;
  });

  deleteItem.remove();
  console.log(todos);
  saveTodo();
}

function addTodos(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  span.innerText = newTodo.text;
  li.id = newTodo.id;
  todoInput.value = "";

  btn.innerText = "X";

  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);

  todoList.appendChild(li);

  saveTodo();
}

function onSubmitEvent(event) {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: todoInput.value,
  };
  todos.push(newTodo);
  addTodos(newTodo);
}

todoForm.addEventListener("submit", onSubmitEvent);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  todos = JSON.parse(savedTodos);

  todos.forEach((element) => {
    const newTodo = {
      id: element.id,
      text: element.text,
    };
    addTodos(newTodo);
  });
}
