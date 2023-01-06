import './style.scss';
import userForm from './modules/ui';
import addTask from './modules/action';


const body = document.querySelector('body');
body.appendChild(userForm());

addTask();
const lala = 'What a shit';


console.log(lala);