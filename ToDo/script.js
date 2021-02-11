const form = document.getElementById("form");
const inForm = document.getElementById("inForm");
const todos = document.getElementById("todos");

const store = JSON.parse(localStorage.getItem("todos"));

if (store) {
    store.forEach((toDo) => {
        addTodo(toDo);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(toDo) {
    let inText = inForm.value;

    if (toDo) {
        inText = toDo.text;
    }

    if (inText) {
        var todo = document.createElement('li');
        if (toDo && toDo.completed) {
            todo.classList.add("completed");
        }
    }

    todo.innerText = inText;
    todos.appendChild(todo);
    inForm.value = ""

    // to make task like as completed by click left click on mouse

    todo.addEventListener('click', () => {
        todo.classList.add('completed');
        updateLS();

    });


    // to make task deleted by click right click on mouse
    todo.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        todo.remove();
        updateLS();


    });

    updateLS();

}


function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}