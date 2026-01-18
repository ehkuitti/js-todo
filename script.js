function loadTasks() {
  let tasks = Array.from(JSON.parse(localStorage))
}

function addChild (event, todos) {

  //Estää selaimen autorefreshin
  event.preventDefault();

  let inputValue = document.getElementById("input").value; 

  if (inputValue === "") {
    alert("Please enter a task before adding."); // Or use a more user-friendly message
    return; // Stop execution if empty
  }

  let listItem = document.createElement("li");

  
  let liItemValue = document.createTextNode(inputValue);

  // Adds the the desired text to the list item
  listItem.appendChild(liItemValue);
  
  listItem.classList.add("item");

  //Pidennetään valmista listaa yksittäisellä lista-alkiolla
  document.getElementById("taskList").appendChild(listItem);

  todoList.push(listItem)

  localStorage.getItem("todoList").setItem(liItemValue, listItem);

  inputValue = '';

}

let todoList = [];

localStorage.setItem("todoList", todoList);

//Obtain button value
let addButton = document.querySelector('button');
let input = document.querySelector('input');

addButton.addEventListener("click", addChild)

let todoDiv = document.createElement('div');
todoDiv.classList.add("todo");

input.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    console.log(event);
    addChild(event, todoList);
  }
})