import { UI } from "./input";
// Helper for element constructors

function createEl(type, id, format, elClass){
  const tempInput = document.createElement(`${format}`);
  tempInput.setAttribute('type', `${type}`);
  tempInput.setAttribute('id', `${id}`);
  tempInput.classList.add(`${elClass}`);

  return tempInput;
}

function labelCreator(id, text){
  const tempLabel = document.createElement('label');
  tempLabel.htmlFor = `${id}`;
  const txt = document.createTextNode(text);
  tempLabel.appendChild(txt);

  return tempLabel;
}

function btnCreator(id, text, /* btnClass */){
  const btn = document.createElement('button');
  btn.setAttribute('type', `button`);
  btn.setAttribute('id', `${id}`);
  // btn.classList.add(btnClass);
  const txt = document.createTextNode(text);
  btn.appendChild(txt);

  return btn;
}
// ++++++++++++++++++++++//

const userForm = () => {
  const divFullScreen = document.createElement('div');
  divFullScreen.classList.add('fullScreenDiv');

  const form = document.createElement('form');
  form.setAttribute('id', 'formTask');

  const inputTitle = createEl('text','inputTitle', 'input');
  const labelInputTitle = labelCreator('inputTitle', 'Task: ');
  inputTitle.setAttribute('required','');

  form.appendChild(labelInputTitle);
  form.appendChild(inputTitle);

  const inputDescription = createEl('text','inputDescription', 'input');
  const lblDescription = labelCreator('inputDescription', 'Description: ');

  form.appendChild(labelInputTitle);
  form.appendChild(inputTitle);

  form.appendChild(lblDescription);
  form.appendChild(inputDescription);

  const inputDate = createEl('date', 'inputDate', 'input');
  const labelInputDate = labelCreator('inputDate', 'Due: ');

  form.appendChild(labelInputDate);
  form.appendChild(inputDate);

  // create a select element and add elements to the dropdown
  const inputPriority = createEl('select','inputPriority', 'select');
  const inputPriorityLabel = labelCreator('inputPriority', 'Priority');

  const optArr = ['Low', 'Medium', 'High'];

  for(let i = 0; i < optArr.length; i+=1){
    const options = createEl('option','', 'option');
    options.value = optArr[i];
    options.id = optArr[i];
    const txtNode = document.createTextNode(optArr[i]);

    options.appendChild(txtNode);
    inputPriority.appendChild(options);
  }

  form.appendChild(inputPriorityLabel);
  form.appendChild(inputPriority);

  const btnAddSave = btnCreator('btnAddSave', 'Save');
  const btnAddCancel = btnCreator('btnAddCancel', 'Cancel');

  form.appendChild(btnAddSave);
  form.appendChild(btnAddCancel);

  divFullScreen.appendChild(form);

  return divFullScreen;
}

const showTaskList = () => {

  const divMainTask = createEl("", "divMainTask", "div", "tableTask");

  /*   const divHead = createEl("", "divHead", "div", "head");
  const completeHead = createEl("", "divComplete", "div", "header");
  const titleHead = createEl("", "divTitle", "div", "header");
  const dueDateHead = createEl("", "divDueDate", "div", "header");
  const priorityHead = createEl("", "divPriority", "div", "header");
  const deleteHead = createEl("", "divDelete", "div", "header");

  completeHead.textContent = "Complete";
  titleHead.textContent = "Task";
  dueDateHead.textContent = "Due Date";
  priorityHead.textContent = "Priority";
  deleteHead.textContent = "Delete";

  divHead.appendChild(completeHead);
  divHead.appendChild(titleHead);
  divHead.appendChild(dueDateHead);
  divHead.appendChild(priorityHead);
  divHead.appendChild(deleteHead);

  divMainTask.appendChild(divHead); */

  const showTaskDiv = () => {
    const arrJson = JSON.parse(localStorage.getItem('arrTask'));
    const divTaskTest = createEl('', 'containerTasks', 'div', 'containerTasks');

    if(arrJson){
      for(let i = 0; i < arrJson.length; i+=1){
        const divTask = createEl('', 'task', 'div', 'task');
        divTask.setAttribute('data-task', `${i}`);

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add(`checkBox`);
        checkBox.setAttribute('id', 'checkBox');
        checkBox.setAttribute('data-check', `${i}`);

        const divTitleShow = createEl('', 'taskDivTitle', 'span', 'spanList');
        divTitleShow.textContent = arrJson[i].taskTitle;
        const divDateShow = createEl('', 'taskDivDate', 'span', 'spanList');
        divDateShow.textContent = arrJson[i].taskDueDate;
        const divPriorityShow = createEl('', 'taskPriority', 'span', 'spanList');
        divPriorityShow.textContent = arrJson[i].taskPriority
        const divBtnShowDel = btnCreator('btnDelete', 'X');
        divBtnShowDel.classList.add('divList', 'btnDel');
        divBtnShowDel.setAttribute('data-del', `${i}`);

        divTask.appendChild(checkBox);
        divTask.appendChild(divTitleShow);
        divTask.appendChild(divDateShow);
        divTask.appendChild(divPriorityShow);
        divTask.appendChild(divBtnShowDel);

        divTaskTest.appendChild(divTask);
      }
    }else{
      const txt = document.createTextNode('NO TASK');
      divTaskTest.appendChild(txt);
    }

    return divTaskTest;
  }

  divMainTask.appendChild(showTaskDiv());

  return divMainTask;
}

const btnAdd = () => {
  const $btnAdd = btnCreator('btnShowForm', 'Add');
  $btnAdd.classList.add('btnShowForm');
  $btnAdd.setAttribute('data-mode', 'false');

  return $btnAdd;

}

const showFullTask = function showAllTaskInfoWhenClickTaskInList(dataTask, mode){
  const divTaskFull = createEl('div','taskFull', 'div');
  divTaskFull.dataset.mode = mode;

  const arrJson = JSON.parse(localStorage.getItem('arrTask'));

  const divTask = createEl('', 'task', 'div', 'task');
  divTask.dataset.task = dataTask;

  const divTitleShow = createEl('', 'taskDivTitle', 'span', 'spanList');
  divTitleShow.textContent = arrJson[dataTask].taskTitle;
  const divDateShow = createEl('', 'taskDivDate', 'span', 'spanList');
  divDateShow.textContent = arrJson[dataTask].taskDueDate;
  const divPriorityShow = createEl('', 'taskPriority', 'span', 'spanList');
  divPriorityShow.textContent = arrJson[dataTask].taskPriority
  const divBtnShowDel = btnCreator('btnDelete', 'X');
  divBtnShowDel.classList.add('divList', 'btnDel');
  divBtnShowDel.dataset.task = dataTask;

  divTaskFull.appendChild(divTitleShow);
  divTaskFull.appendChild(divDateShow);
  divTaskFull.appendChild(divPriorityShow);
  divTaskFull.appendChild(divBtnShowDel);

  return divTaskFull;
}

const BodyShow = () => {
  const { body } = UI();

  // clear body and add new tasks
  while(body.firstChild){
    body.removeChild(body.firstChild);
  }
  const mainDiv = createEl('', 'mainDiv', 'div', 'divTask');

  body.appendChild(mainDiv);
  body.appendChild(btnAdd());
  body.appendChild(showTaskList());

  return body;
}




export { userForm, showTaskList, BodyShow, btnAdd, showFullTask };

/*
when click in div task, show all the data of the task.
add delete and complete functionality
 */