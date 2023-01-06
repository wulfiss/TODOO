// Helper for element constructors

function createEl(type, id, format){
  const tempInput = document.createElement(`${format}`);
  tempInput.setAttribute('type', `${type}`);
  tempInput.setAttribute('id', `${id}`);

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
  btn.setAttribute('class', `${btnClass}`);
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

  for(let i = 0; i < optArr.length; i++){
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

export default userForm;

