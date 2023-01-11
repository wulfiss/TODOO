const BTN = () => {
  const $showForm = document.querySelector('#btnShowForm');
  const $btnAdd = document.querySelector('#btnAdd');

  return{
    $showForm, $btnAdd
  }
}

const UI = () => {
  const form = document.querySelector('form');
  const body = document.querySelector('body');

  return{
    form, body
  }
}

const DATA = () => {

  const taskTitle = document.querySelector('#inputTitle').value;
  const taskDate = document.querySelector('#inputDate').value;
  const taskPriority = document.querySelector('#inputPriority').value;

  return{
    taskDate, taskPriority, taskTitle
  }
}

export { UI, BTN, DATA } ;