import {Model} from './Model'
import {UserProps} from '../types/UserProps'
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Collection } from './Collection';

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps>{
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes(attrs), new Sync<UserProps>(rootUrl), new Eventing())
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json))
  }
  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({age});
  }
}