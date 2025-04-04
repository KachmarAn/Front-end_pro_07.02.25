'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".js--form");
    const input = document.querySelector(".js--form__input");
    const todoList = document.querySelector(".js--todos-wrapper");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = `todo-item ${todo.checked ? "todo-item--checked" : ""}`;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.checked;
            checkbox.addEventListener("change", () => {
                todos[index].checked = checkbox.checked;
                saveTodos();
                renderTodos();
            });

            const span = document.createElement("span");
            span.className = "todo-item__description";
            span.textContent = todo.text;

            const deleteButton = document.createElement("button");
            deleteButton.className = "todo-item__delete";
            deleteButton.textContent = "Видалити";
            deleteButton.addEventListener("click", () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (text !== "") {
            todos.push({ text, checked: false });
            saveTodos();
            renderTodos();
            input.value = "";
        }
    });

    renderTodos();
});
