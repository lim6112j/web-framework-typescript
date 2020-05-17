import { UserForm } from './views/UserForm';
import { User } from './models/User';
const user = User.buildUser({name: 'joo', age: 30});
const bodyEle = document.getElementById('root');
const userForm = new UserForm(bodyEle, user);
userForm.render();