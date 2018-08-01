
function onReady(){
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let toDos = [];

  function renderTheUI(){
    const TODO_LIST = document.getElementById('toDoList');
    TODO_LIST.textContent = '';

    toDos.forEach(function(toDo){
      const NEW_LI document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";

      NEW_LI.textContent = toDo.title;
      NEW_LI.appendChild(CHECKBOX);
      TODO_LIST.appendChild(NEW_LI);
    });
  }

  function createNewToDo(){
    const NEW_TODO_TEXT = docuement.getElementById('newToDoText');
    if(!NEW_TODO_TEXT.value){return; }
    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false
    });
    NEW_TODO_TEXT.value = '';
    renderTheUI();
  }

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    console.log(toDos);
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
