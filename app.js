function onReady() {
  let todos = [];
  let currentToDoId =1;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the text
let title = newToDoText.value;

// create a new li
let newLi = document.createElement('li');

// create a new input
let checkbox = document.createElement('input');

// delete button
let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener('click', function(event) {
      let newToDoText= this.parentElement.childNodes[0].nodeValue;
      todos.forEach(function(todoItem, index){
        if(todoItem.name ==newToDoText){
          // delete that item
          todos.splice(index, 1);
        }
        console.log(todos);
      })
      toDoList.removeChild(this.parentElement);
    });

// set the input's type to checkbox
checkbox.type = "checkbox";

// set the title
newLi.textContent = title;

// attach the checkbox to the li
newLi.appendChild(checkbox);

//attach the delete button

newLi.appendChild(deleteBtn);

 // attach the li to the ul
 toDoList.appendChild(newLi);

 //empty the input
newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
