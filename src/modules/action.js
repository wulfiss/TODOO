import { showTask, BodyShow } from "./ui";
import { UI, BTN, DATA } from "./input";

const Tasks = (title, dueDate, priority, complete) => {
  const taskTitle =  title;
  const taskDueDate = dueDate;
  const taskPriority = priority;
  const taskComplete = complete;

  return{
    taskTitle, taskDueDate, taskPriority, taskComplete
  }
}

// check if exist data in the local storage, if true, add new task to the existing object, if false, create a new array
const arrToJson = (task) => {
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

const addTask = () => {
  const { $btnAdd } = BTN();

  $btnAdd.addEventListener('click', (e) => {
    const newTask = Tasks(DATA().taskTitle,DATA().taskDate, DATA().taskPriority);
    arrToJson(newTask);

    BodyShow();
    addTask();

  })

};

const showAdd = () => {
  const { form } = UI();
  const { $showForm } = BTN();

  form.style.display = 'none';

  $showForm.removeChild($showForm.firstChild);

  const btnTxtAdd = document.createTextNode('Add');
  $showForm.appendChild(btnTxtAdd);
}

const btnAddAction = () => {
  const { form } = UI();
  const { $showForm } = BTN();
  const txtCancel = document.createTextNode('Cancel');

  $showForm.addEventListener('click', (e) => {
    if(form.style.display === 'grid'){
      showAdd();
    }else{
      form.style.display = 'grid';
      $showForm.removeChild($showForm.firstChild);
      $showForm.appendChild(txtCancel);
    }

  })
}

export { addTask, btnAddAction } ;

