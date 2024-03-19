let todos = [];

function addTodo() {
    const msg = document.querySelector('.msg');
    const input = document.querySelector('input');

    if(input.value === '') {
        msg.textContent = 'Please add a text for your todo';
        return;
    }
    const newTodo = input.value;
    todos.push(newTodo);
    input.value = '';
    createTodoList();
    msg.textContent = '';
}

function checkStatus() {
    if (this.checked) {
        if (this.nextElementSibling) {
            this.nextElementSibling.style.textDecoration = 'line-through';
        }
    } else {
        if (this.nextElementSibling) {
            this.nextElementSibling.style.textDecoration = 'none';
        }
    }
}

function createTodoList() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = ''; // Clear the list before adding updated todos
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li'); // Create a new li for each todo
        const input = document.createElement('input');
        const label = document.createElement('label');
        const button = document.createElement('button');

        input.type = 'checkbox';
        input.onclick = checkStatus;
        input.id = `todo-${i}`;
        label.setAttribute('for', `todo-${i}`);
        label.textContent = todos[i];
        button.textContent = 'X';
        button.onclick = deleteTodo;

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);
        todoList.appendChild(li);
    }
}

function deleteTodo() {
    // Identify the index of the todo to be deleted
    let index = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);
    todos.splice(index, 1); // Remove the todo from the array
    createTodoList(); // Re-create the todo list
}
