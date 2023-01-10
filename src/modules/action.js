import { showTask, BodyShow } from "./ui";
import input from "./input";

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
  const btnAdd = document.querySelector('#btnAdd');

  const infoTask = () => {
    const taskTitle = document.querySelector('#inputTitle').value;
    const taskDate = document.querySelector('#inputDate').value;
    const taskPriority = document.querySelector('#inputPriority').value;

    return{
      taskDate, taskPriority, taskTitle
    }
  }


  btnAdd.addEventListener('click', (e) => {
    const newTask = Tasks(infoTask().taskTitle,infoTask().taskDate, infoTask().taskPriority);
    arrToJson(newTask);

    BodyShow();
    addTask();

  })

};

const showAdd = () => {
  const { form } = input();
  const { $showForm } = input();

  form.style.display = 'none';

  $showForm.removeChild($showForm.firstChild);

  const btnTxtAdd = document.createTextNode('Add');
  $showForm.appendChild(btnTxtAdd);
}

const btnAddAction = () => {
  const { form } = input();
  const { $showForm } = input();
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

