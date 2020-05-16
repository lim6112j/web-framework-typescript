import { Collection } from './Collection';
import { User } from './User';
import { UserProps } from '../types/UserProps';
import { Attributes } from './Attributes';
import { Sync } from './Sync';
import { Eventing } from './Eventing';
export class UserCollection {
  rootUrl = 'http://localhost:3000/users';
  collection: Collection<User, UserProps>
  constructor() {
    this.collection = new Collection(this.rootUrl, this.fn);
  }
  fn(json: UserProps) {
    return new User(new Attributes(json), new Sync(this.rootUrl), new Eventing());
  }
}