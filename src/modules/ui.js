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


