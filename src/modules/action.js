import { userForm, BodyShow, showFullTask } from "./ui";
import { UI, BTN, DATA } from "./input";
/*
const Tasks = (title, dueDate, priority, complete) => {
  const taskTitle =  title;
  const taskDueDate = dueDate;
  const taskPriority = priority;
  const taskComplete = complete;

  return{
    taskTitle, taskDueDate, taskPriority, taskComplete
  }
}
*/

const Tasks = (taskTitle, taskDueDate, /* taskPriority, taskComplete, */ taskDescription) => ({
  taskTitle, taskDueDate, /* taskPriority, taskComplete, */ taskDescription
})// just a object creator for task the full version is up

// check if exist data in the local storage, if true, add new task to the existing object, if false, create a new array
const arrToJson = function convertJsonToArrAndArrToJson(task){
  let arrJson = JSON.parse(localStorage.getItem('arrTask'));

  if(arrJson){
    arrJson.push(task);
  }else{
    arrJson = [];
    arrJson.push(task);
  }

  localStorage.clear();

  return localStorage.setItem('arrTask', JSON.stringify(arrJson));
};

const btnShowAddTask = function showAndHideFormTaskWhenPressBtnAddOrCancel(){
  const { mainBody } = UI();
  const { $showForm } = BTN();

  $showForm.addEventListener('click', (e) => {
    const { target } = e;

    if(target.getAttribute('data-mode') === 'false'){
      mainBody.appendChild(userForm());
      addTask();
      target.setAttribute('data-mode','true');
      $showForm.textContent = 'Cancel';
    }else if(target.getAttribute('data-mode') === 'true'){
      const { formTask } = UI();
      formTask.remove();
      target.setAttribute('data-mode','false');
      $showForm.textContent = 'Add';
    }
  })

}

const addTask = function addTaskToArr(){
  const { $btnFormSave } = BTN();

  $btnFormSave.addEventListener('click', (e) => {
    const { taskTitle, taskDate, /* taskPriority, */ taskDescription } = DATA();

    const newTask = Tasks(taskTitle, taskDate, /* taskPriority, */ taskDescription);
    arrToJson(newTask);

    BodyShow();
    btnShowAddTask();

  })

};

const readDivTaskClick = function showAllTaskInfoWhenClickTaskInList(){

  const { taskContainerDiv, mainBody } = UI();

  taskContainerDiv.addEventListener('click', (e) => {
    const { target } = e;
    let dataTask;

    if(target.nodeName === 'DIV' && target.id === 'task'){
      dataTask = target.dataset.task;
      console.log(dataTask);

      mainBody.appendChild(showFullTask(dataTask, true));

    }
  });

}

export { addTask, btnShowAddTask, readDivTaskClick } ;

