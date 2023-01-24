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
  const fullTask = document.querySelector('#taskFull');
  const taskContainerDiv = document.querySelector('#containerTasks');

  return{
    formTask, body, mainDiv, taskContainerDiv, fullTask
  }
}

const DATA = () => {

  const taskTitle = document.querySelector('#inputTitle').value;
  const taskDate = document.querySelector('#inputDate').value;
  const taskPriority = document.querySelector('#inputPriority').value;
  const taskDescription = document.querySelector('#inputDescription').value;
  return{
    taskDate, taskPriority, taskTitle, taskDescription
  }
}

export { UI, BTN, DATA } ;