import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Sync } from './Sync';
// Option #1 
// Accept dependencies as second constructor argument
// new User({id:1}, new Eventing())
// Option #2
// static class method to preconfigure user and assign properties afterwards.
// and return user instance.
// Option #3
// Only accept properties into constructor
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
import { Model } from "./Model";

// Hard code dependencies as class properties
const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps>{
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes(attrs), new Sync<UserProps>(rootUrl), new Eventing())
  }
}