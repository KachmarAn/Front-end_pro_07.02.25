const apiURL = 'http://localhost:3000/api/';

async function fetchTodos() {
    try {
        const todos = await getTodos();
        renderTodos(todos);
    } catch (error) {
        console.error('Помилка отримання списків завдань:', error);
        alert('Не вдалося завантажити завдання. Спробуйте ще раз.');
    }
}

async function getTodos() {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error('Не вдалося отримати список справ');
    return await res.json();
}

function renderTodos(todos) {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onclick="toggleTodo(${todo.id}, ${!todo.completed})">
            <span class="todo-title" style="text-decoration: ${todo.completed ? 'line-through' : 'none'}">
                ${todo.title}
            </span>
            <input type="text" class="edit-input" style="display: none;" value="${todo.title}">
            <button onclick="startEditing(${todo.id}, this)">✏️</button>
            <button onclick="deleteTodo(${todo.id})">❌</button>
            <button onclick="saveEdit(${todo.id}, this)" style="display: none;">💾</button>
        `;
        list.appendChild(li);
    });
}
function startEditing(id, editButton) {
    const li = editButton.parentElement;
    const titleSpan = li.querySelector('.todo-title');
    const editInput = li.querySelector('.edit-input');
    const saveButton = li.querySelector('button[onclick*="saveEdit"]');

    titleSpan.style.display = 'none';
    editInput.style.display = 'inline';
    editButton.style.display = 'none';
    saveButton.style.display = 'inline';

    editInput.focus();
}

async function saveEdit(id, saveButton) {
    const li = saveButton.parentElement;
    const editInput = li.querySelector('.edit-input');
    const newTitle = editInput.value.trim();

    if (!newTitle) {
        alert('Назва завдання не може бути порожньою.');
        return;
    }
    if (newTitle.length > 100) {
        alert('Назва завдання має містити не більше 100 символів.');
        return;
    }

    try {
        await updateTodo(id, { title: newTitle });
        await fetchTodos();
    } catch (error) {
        console.error('Помилка редагування завдання:', error);
        alert('Не вдалося відредагувати завдання. Спробуйте ще раз.');
    }
}

async function addTodo() {
    const input = document.getElementById('newTodo');
    const title = input.value.trim();
    if (!title) return;
    if (title.length > 100) {
        alert('Назва завдання має містити не більше 100 символів.');
        return;
    }
    try {
        await createTodo(title);
        input.value = '';
        await fetchTodos();
    } catch (error) {
        console.error('Помилка додавання завдання:', error);
        alert('Не вдалося додати завдання. Спробуйте ще раз.');
    }
}

async function createTodo(title) {
    const res = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
    if (!res.ok) throw new Error('Не вдалося створити завдання');
}

async function toggleTodo(id, completed) {
    try {
        await updateTodo(id, { completed });
        await fetchTodos();
    } catch (error) {
        console.error('Помилка перемикання списку завдань:', error);
        alert('Не вдалося перемкнути список завдань. Спробуйте ще раз.');
    }
}

async function updateTodo(id, data) {
    const res = await fetch(`${apiURL}${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Не вдалося оновити список справ');
}

async function deleteTodo(id) {
    try {
        await fetch(`${apiURL}${id}`, {
            method: 'DELETE'
        });
        await fetchTodos();
    } catch (error) {
        console.error('Помилка видалення завдання:', error);
        alert('Не вдалося видалити завдання. Спробуйте ще раз..');
    }
}

fetchTodos();