import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserList } from './views/UserList';
const user = User.buildUser({name: 'joo', age: 30});
const userL = User.buildUserCollection();
const root = document.getElementById('root');
// if(root){
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit)
// } else {
//   throw new Error('root element not exists')
// }
if(root) {
  const userList = new UserList(root, userL);
  userList.render();
  console.log(userList)
}