import axios, { AxiosResponse } from 'axios';
import { User } from "./User";
import { Eventing } from "./Eventing";
import { UserProps } from '../types/UserProps';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string) {

  }
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    axios.get(this.rootUrl)
    .then((res: AxiosResponse) => {
      res.data.forEach((value: UserProps) => {
       const user = User.buildUser(value);
       this.models.push(user);
      });
    })
    .catch(err => console.log(err));
    this.trigger('change')
  }
}