import { UI } from "./input";

const createElements = function littleHelperForCreatingHtmlElements(type, id, clasS, attrType, textNode, idLbl, attrValue, attrName){
  const temp = document.createElement(type);

  if(id){
    temp.setAttribute('id', id);
  }
  if(clasS){
    temp.classList.add(...clasS);
  }
  if(attrType){
    temp.setAttribute('type', attrType);
  }
  if(textNode){
    const txt = document.createTextNode(textNode);
    temp.appendChild(txt);
  }
  if(idLbl){
    temp.htmlFor = idLbl;
  }
  if(attrValue){
    temp.setAttribute('value', attrValue);
  }
  if(attrName){
    temp.setAttribute('name', attrName);
  }

  return temp;
}

const userForm = () => {

  const divFullScreen = createElements('div', '', ['fullScreenDiv']);

  const form = createElements('form', 'formTask')

  const labelInputTitle = createElements('label', '', '', '', 'Task', 'inputTitle');
  const inputTitle = createElements('input', 'inputTitle', '', 'text');

  form.appendChild(labelInputTitle);
  form.appendChild(inputTitle);

  const inputDescription = createElements('textarea', 'inputDescription', '', '');
  const lblDescription = createElements('label', '', '', '', 'Description', 'inputDescription');

  form.appendChild(lblDescription);
  form.appendChild(inputDescription);

  const inputDate = createElements('input', 'inputDate', '', 'date');
  const labelInputDate = createElements('label', '', '', '', 'Due', 'inputDate');

  form.appendChild(labelInputDate);
  form.appendChild(inputDate);

  /* create a select element and add elements to the dropdown
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
 */

  const labelInputCheck = createElements('label', '', '', '', 'Highlight', 'checkBox');
  const checkBox = createElements('input', 'inputPriority', ['checkBox'], 'checkbox', '', '', 'true', 'highlight');

  labelInputCheck.appendChild(checkBox);
  form.appendChild(labelInputCheck);

  const btnFormSave = createElements('button', 'btnFormSave', '', 'button', 'Save');
  const btnFormCancel = createElements('button', 'btnFormCancel', '', 'button', 'Cancel');

  form.appendChild(btnFormSave);
  form.appendChild(btnFormCancel);

  divFullScreen.appendChild(form);

  return divFullScreen;
}

const taskDesk = () => {

  const arrJson = JSON.parse(localStorage.getItem('arrTask'));
  const divTaskTest = createElements('div', 'containerTask', ['containerTasks']);

  if(arrJson){
    for(let i = 0; i < arrJson.length; i+=1){

      const divTask = createElements('div', 'task', ['task'])
      divTask.dataset.task = i;
      const divTitleShow = createElements('span', 'spanTaskName', ['spanList'], '', arrJson[i].taskTitle);
      divTitleShow.dataset.task = i;
      const divDateShow = createElements('span', 'spanTaskDate', ['spanList'], '', arrJson[i].taskDueDate);
      divDateShow.dataset.task = i;

      divTask.appendChild(divTitleShow);
      divTask.appendChild(divDateShow);

      divTaskTest.appendChild(divTask);
    }
  }else{
    const txt = document.createTextNode('NO TASK');
    divTaskTest.appendChild(txt);
  }

  return divTaskTest;
}

const btnAdd = () => {

  const $btnAdd = createElements('button', 'btnShowForm', ['btnShowForm'], '', 'Add');
  $btnAdd.dataset.mode = 'false';

  return $btnAdd;

}

const showFullTask = function showAllTaskInfoWhenClickTaskInList(dataTask, mode){
  const divTaskFull = createElements('div', 'taskFull');
  divTaskFull.dataset.mode = mode;

  const arrJson = JSON.parse(localStorage.getItem('arrTask'));

  const divTask = createElements('div', 'task', ['task']);
  divTask.dataset.task = dataTask;
  const divTitleShow = createElements('span', 'spanTaskName', ['spanList'], '', arrJson[dataTask].taskTitle);
  const divDateShow = createElements('span', 'spanTaskDate', ['spanList'], '', arrJson[dataTask].taskDueDate);

  const divBtnShowDel = createElements('button', 'btnDelete', ['divList', 'btnDel'], '', 'Delete');
  divBtnShowDel.dataset.task = dataTask;
  const btnCloseAndSave = createElements('button', 'btnCloseSave', ['divList'], '', 'Save & Close');
  btnCloseAndSave.dataset.task = dataTask;

  divTaskFull.appendChild(divTitleShow);
  divTaskFull.appendChild(divDateShow);
  divTaskFull.appendChild(divBtnShowDel);
  divTaskFull.appendChild(btnCloseAndSave);

  return divTaskFull;
}

const BodyShow = () => {
  const { body } = UI();

  const headBody = createElements('header');
  const mainBody = createElements('main', '', ['mainBody']);
  const footerBody = createElements('footer');

  // clear body and add new tasks
  while(body.firstChild){
    body.removeChild(body.firstChild);
  }

  mainBody.appendChild(btnAdd());
  mainBody.appendChild(taskDesk());

  body.appendChild(headBody);
  body.appendChild(mainBody);
  body.appendChild(footerBody);

  return body;
}


export { userForm, BodyShow, btnAdd, showFullTask };
