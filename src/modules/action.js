import { userForm, BodyShow } from "./ui";
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

const btnShowAddTask = () => {
  const { mainDiv } = UI();
  const { $showForm } = BTN();

  $showForm.addEventListener('click', (e) => {
    const { target } = e;


    if(target.getAttribute('data-mode') === 'false'){
      mainDiv.appendChild(userForm());
      addTask();
      target.setAttribute('data-mode','true');
      $showForm.textContent = 'Cancel';
    }else if(target.getAttribute('data-mode') === 'true'){
      mainDiv.removeChild(mainDiv.firstChild);
      target.setAttribute('data-mode','false');
      $showForm.textContent = 'Add';
    }
  })

}

function addTask() {
  const { $btnAdd } = BTN();

  $btnAdd.addEventListener('click', (e) => {
    const newTask = Tasks(DATA().taskTitle,DATA().taskDate, DATA().taskPriority);
    arrToJson(newTask);

    BodyShow();
    btnShowAddTask();

  })

};

export { addTask, btnShowAddTask } ;

