import './style.scss';
import { showTask, userForm } from './modules/ui';
import addTask from './modules/action';


const body = document.querySelector('body');
body.appendChild(userForm());
body.appendChild(showTask());

addTask()

const lala = 'What a shit';


console.log(lala);
