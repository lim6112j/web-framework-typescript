import { View } from '../views/view';
import { User } from '../models/User';
import { UserProps } from '../types/UserProps';

export class UserShow extends View<User, UserProps> {
  template() {
    return `
    <div>
      <h1>User Detail</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
    </div>
    `
  }
}