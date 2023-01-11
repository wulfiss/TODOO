const BTN = () => {
  const $showForm = document.querySelector('#btnShowForm');
  const $btnAdd = document.querySelector('#btnAdd');

  return{
    $showForm, $btnAdd
  }
}

const UI = () => {
  const formTask = document.querySelector('#formTask');
  const body = document.querySelector('body');
  const mainDiv = document.querySelector('#mainDiv');

  return{
    formTask, body, mainDiv
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