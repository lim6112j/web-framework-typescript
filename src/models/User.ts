import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
const url = 'http://localhost:3000/users/';
interface UserProps {
  id?: number,
  name?: string,
  age?: number
}
// Option #1 
// Accept dependencies as second constructor argument
// new User({id:1}, new Eventing())
// Option #2
// static class method to preconfigure user and assign properties afterwards.
// and return user instance.
// Option #3
// Only accept properties into constructor
// Hard code dependencies as class properties
export class User {
  events: Eventing = new Eventing();
  constructor(private data: UserProps) {}
  get(propName: string): (number | string) {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((res: AxiosResponse): void => {
      this.set(res.data);
    })
  }
  save(): void {
    const id = this.get('id');
    id ? axios.put(`${url}${id}`, this.data) : axios.post(url, this.data)
  }
}