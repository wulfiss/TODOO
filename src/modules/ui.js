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

function btnCreator(id, btnClass, text){
  const btn = document.createElement('button');
  btn.setAttribute('type', `button`);
  btn.setAttribute('id', `${id}`);
  btn.classList.add(`${btnClass}`);
  const txt = document.createTextNode(text);
  btn.appendChild(txt);

  return btn;
}
// ++++++++++++++++++++++//

const userForm = () => {

  const form = document.createElement('form');

  const inputTitle = createEl('text','inputTitle', 'input');
  const labelInputTitle = labelCreator('inputTitle', 'Title: ');

  form.appendChild(labelInputTitle);
  form.appendChild(inputTitle);

  /* const inputDescription = createEl('text', 'inputDescrip', 'input');
  const labelInputDescrip = labelCreator ('inputDescrip', 'Description: ');

  form.appendChild(labelInputDescrip);
  form.appendChild(inputDescription);
  */

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

  const btnAdd = btnCreator('btnAdd', 'btnShow', 'Add');
  const btnCancel = btnCreator('btnCancel', 'btnShow', 'Cancel');

  form.appendChild(btnAdd);
  form.appendChild(btnCancel);

  return form;
}

const showTask = () => {

  const divMainTask = createEl('','divMainTask', 'div', 'tableTask');

  const divHead = createEl('', 'divHead', 'div', 'head');
  const completeHead = createEl('', 'divComplete', 'div', 'header');
  const titleHead = createEl('', 'divTitle', 'div', 'header');
  const dueDateHead = createEl('', 'divDueDate', 'div', 'header');
  const priorityHead = createEl('', 'divPriority', 'div', 'header');
  const deleteHead = createEl('', 'divDelete', 'div', 'header');

  completeHead.textContent = 'Complete';
  titleHead.textContent = 'Task';
  dueDateHead.textContent = 'Due Date';
  priorityHead.textContent = 'Priority';
  deleteHead.textContent = 'Delete';

  divHead.appendChild(completeHead);
  divHead.appendChild(titleHead);
  divHead.appendChild(dueDateHead);
  divHead.appendChild(priorityHead);
  divHead.appendChild(deleteHead);

  divMainTask.appendChild(divHead);

  const showTaskDiv = () => {
    const arrJson = JSON.parse(localStorage.getItem('arrTask'));
    const divTaskTest = createEl('', 'tasks', 'div', 'tasks');

    if(arrJson){
      for(let i = 0; i < arrJson.length; i+=1){
        const divTask = createEl('', 'task', 'div', 'task');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add(`checkBox`);
        checkBox.setAttribute('id', 'checkBox');

        const divTitleShow = createEl('', 'task', 'div', 'tasks');
        divTitleShow.textContent = arrJson[i].taskTitle;
        const divDateShow = createEl('', 'task', 'div', 'tasks');
        divDateShow.textContent = arrJson[i].taskDueDate;
        const divPriorityShow = createEl('', 'task', 'div', 'tasks');
        divPriorityShow.textContent = arrJson[i].taskPriority
        const divBtnShow = btnCreator('btnDelete','btnDelete','X');

        divTask.appendChild(checkBox);
        divTask.appendChild(divTitleShow);
        divTask.appendChild(divDateShow);
        divTask.appendChild(divPriorityShow);
        divTask.appendChild(divBtnShow);

        divTaskTest.appendChild(divTask);
      }
    }else{
      divTaskTest.textContent('lalala');
    }

    return divTaskTest;
  }

  divMainTask.appendChild(showTaskDiv());

  return divMainTask;
}

export { userForm, showTask };

