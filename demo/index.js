// Add a delete button inside each list item
function createTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(deleteButton);
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

list.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
    }
});