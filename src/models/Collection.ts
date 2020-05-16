import axios, { AxiosResponse } from 'axios';
import { Eventing } from "./Eventing";

export class Collection<T, P>{
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string, private deserialize: (json: P) => T) {

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
      res.data.forEach((value: P) => {
       const obj: T = this.deserialize(value);
       this.models.push(obj);
      });
    })
    .catch(err => console.log(err));
    this.trigger('change')
  }
}