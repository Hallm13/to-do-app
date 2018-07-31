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

// create a new span for the text
let textSpan = document.createElement('span');

// create a new span for the checkbox
let newSpan = document.createElement('span');

// create a label
let newLabel = document.createElement('label');

// create a delete button
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
// set the class of the button
deleteBtn.className = "mdl-button mdl-js-button mdl-button--raised";

// set the input's type to checkbox
checkbox.type = "checkbox";

// styles the checkbox
checkbox.id = "list-checkbox-1";
checkbox.className = "mdl-checkbox__input";

// set the title of the todo
textSpan.textContent = title;

// styles the li
newLi.className = "mdl-list__item";

// style the span
newSpan.className = "mdl-list__item-secondary-action";
textSpan.className = "mdl-list__item-primary-content";

// style the label
newLabel.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
newLabel.htmlFor = 'list-checkbox-1'

// attach the checkbox to the label
newLabel.appendChild(checkbox);

// attache the label to the span
newSpan.appendChild(newLabel);

// attach the span to the li
newLi.appendChild(newSpan);
newLi.appendChild(textSpan);

// attach the delete button to the li
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
