import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
const user = User.buildUser({name: 'joo', age: 30});
const root = document.getElementById('root');
if(root){
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit)
} else {
  throw new Error('root element not exists')
}
