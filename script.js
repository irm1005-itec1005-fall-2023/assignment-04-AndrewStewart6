/*
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    try (
      const todoItem = new Date().getTime();
      const todoItem = {
        id: todoId,
        text: todoText,
        completed: false;
      }
      todoItems.push(todoItem);
      renderTodoList()
      todoInput.value = '';
    )
  }
}
*/


/*
let todoArray = [];
let todoForm = document.getElementById("form-todo");
let todoList = document.getElementById("todo-name-list");
let todoInput = document.getElementById("name-input-1");

let todoItems= [];
function addToDoItem(text) {
  // Implement the logic to add a task here
  let todoItem = {
    id: todoItems.length,
    text: text,
    completed: false
  }
todoItems.push(todoItem)
}

// Function to remove a todo to the list
function removeToDoItem(todoId) {
  // Implement the logic to add a task here
  for (let i = 0; i < todoItems.length; i++){
    if (todoItems[i].id === todoId){
      todoItems.splice(i, 1);
      break;
    }
  }
}

// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
for (let i = 0; i < todoItems.length; i++){
  if (todoItems[i].id === todoId){
    todoItems[i].completed = true;
    break;
  }
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here
for (let i = todoItems.length; i > 0; i--){
  if (todoitems[i].completed === true){
    todoItems.splice(i, 1);
  }
}
}

todoForm.addEventListener("submit", addToDoItem, handleSubmitForm);

function handleSubmitForm(event) {

  event.preventDefault();

  todoArray.push(todoInput.value);

  todoForm.reset();

  renderData();
}
*/


let todoArray = [];
let todoForm = document.getElementById("form-todo");
let todoList = document.getElementById("todo-name-list");
let todoInput = document.getElementById("name-input-1");

todoForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {

  // Prevent the default behavior of the form`
  event.preventDefault();

  // Grab the value from the input
  //console.log("Name of Superhero: ", superHeroInput.value);

  // This is what you do in add to do app
  // addTodoItem(superHeroInput.value);

  todoArray.push(todoInput.value);
  
  // Clear the input
  // superHeroInput.value = "";
  todoForm.reset();

  // Draw the list
  renderData();
}


// Render the data to the page
function renderData() {

  console.log("Render Data", todoArray);

  // Clear the list
  todoList.innerHTML = "";

  for (let i=0; i < todoArray.length ; i++ ){
    let tempListItem = document.createElement("li");
    

    tempListItem.textContent = todoArray[i];
    let tempButton = document.createElement("button");
    tempButton.className = "YourClass"; 

    let tempButton1 = document.createElement("button");
    tempButton.textContent = "Remove";

    tempButton1.textContent = "Done";

    tempButton.dataset.todo = i;

    tempButton1.dataset.todo = i;

    // You can actually add an event handler here
    tempButton.addEventListener("click", function(event){

      console.log("You clicked on", event.target.dataset.todo);

      // Remove this item from the array
      todoArray.splice(event.target.dataset.todo, 1);

      // Re-render the list
      renderData();

    });

    tempButton1.addEventListener("click", function(event){

      console.log("You clicked on", event.target.dataset.todo);

      // Re-render the list
      renderData();

    });
    

    tempListItem.appendChild(tempButton);

    tempListItem.appendChild(tempButton1);

 todoList.appendChild(tempListItem);

  }
}





// Call renderlist for the first time

/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
/*
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();
*/