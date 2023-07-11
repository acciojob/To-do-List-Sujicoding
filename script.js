// Get the required elements from the DOM
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Add event listener to the "Add todo" button
addTodoBtn.addEventListener('click', addTodo);

// Function to add a new todo item
function addTodo() {
  // Get the value of the input field
  const todoText = newTodoInput.value.trim();

  // Check if the todoText is not empty
  if (todoText !== '') {
    // Create a new list item (li)
    const newTodoItem = document.createElement('li');

    // Set the text content of the list item
    newTodoItem.textContent = todoText;

    // Append the new list item to the todo list
    todoList.appendChild(newTodoItem);

    // Clear the input field
    newTodoInput.value = '';
  }
}


