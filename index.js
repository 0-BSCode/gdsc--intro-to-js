// Add a delete button inside each list item
function createTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    return li;
}

const input = document.getElementById('task');
const button = document.getElementById('add-button');
const list = document.getElementById('todo-list');

button.addEventListener('click', function () {
    const taskText = input.value;
    if (taskText) {
        const todoItem = createTodoItem(taskText);
        list.appendChild(todoItem);
        input.value = '';
    }
});