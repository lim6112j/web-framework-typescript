import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { UserProps } from '../types/UserProps';

// Option #1 
// Accept dependencies as second constructor argument
// new User({id:1}, new Eventing())
// Option #2
// static class method to preconfigure user and assign properties afterwards.
// and return user instance.
// Option #3
// Only accept properties into constructor
// Hard code dependencies as class properties
const rootUrl = 'http://localhost:3000/users';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attrs: Attributes<UserProps>;
  constructor(props: UserProps){
    this.attrs = new Attributes<UserProps>(props);
  }
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attrs.get;
  }
  get set() {
    return this.attrs.set;
  }
  get fetch() {
    return this.sync.fetch;
  }
  get save() {
    return this.sync.save;
  }
}