const Tasks = (title, dueDate, priority) => {
  const taskTitle =  title;
  const taskDueDate = dueDate;
  const taskPriority = priority;


  return{
    taskTitle, taskDueDate, taskPriority,
  }
}

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

    console.log(newTask);
  })


};

export default addTask;