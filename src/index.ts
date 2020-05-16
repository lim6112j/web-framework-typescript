import { UserForm } from './views/UserForm';

const bodyEle = document.getElementById('root');
const userForm = new UserForm(bodyEle);
userForm.render();