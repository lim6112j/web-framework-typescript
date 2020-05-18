import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './types/UserProps';
const users = User.buildUserCollection();
// console.log(users)
users.on('change', () => {
  const root = document.getElementById('root');

  if(root){
    new UserList(root, users).render()
  }
})
users.fetch();
// if(root){
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit)
// } else {
//   throw new Error('root element not exists')
// }