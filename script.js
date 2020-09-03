var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var errorMessage = document.getElementById('error');
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderToDos() {
    todoList.innerHTML = "";
    errorMessage.innerText = "";
    todoCountSpan.textContent = todos.length;
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement("li");
        li.textContent = todos[i];
        todoList.appendChild(li);

    }
}
// listen for when the form is submitted or user preses enter key
todoForm.addEventListener('submit', function (event) {
    // stop the browser from refreshing or submitting
    event.preventDefault();
    // get the value of the input and remove spaces before and after
    var todo = todoInput.value.trim();
    // check if the todo is empty
    // if empty stop excecution of this code and display error message
    if (todo === "") {
        errorMessage.innerText = "Please type something";
        return
    }
    // check if the same todo exists
    if (todos.includes(todo)) {
        errorMessage.innerText = "That todo already exists";
        return
    }
    todos.push(todo);
    todoInput.value = "";
    renderToDos();

})







renderToDos();




