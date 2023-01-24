const BTN = () => {
  const $showForm = document.querySelector('#btnShowForm');
  const $btnFormSave = document.querySelector('#btnFormSave');
  const $btnFormCancel = document.querySelector('#btnFormCancel');

  return{
    $showForm, $btnFormCancel, $btnFormSave
  }
}

const UI = () => {
  const formTask = document.querySelector('#formTask');
  const body = document.querySelector('body');
  const mainBody = document.querySelector('main');
  const fullTask = document.querySelector('#taskFull');
  const taskContainerDiv = document.querySelector('#containerTasks');

  return{
    formTask, body, mainBody, taskContainerDiv, fullTask
  }
}

const DATA = () => {

  const taskTitle = document.querySelector('#inputTitle').value;
  const taskDate = document.querySelector('#inputDate').value;
  const taskPriority = document.querySelector('input[name="highlight"]:checked').value;
  const taskDescription = document.querySelector('#inputDescription').value;
  return{
    taskDate, taskPriority, taskTitle, taskDescription
  }
}

export { UI, BTN, DATA } ;