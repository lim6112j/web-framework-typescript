import axios, { AxiosResponse } from 'axios';
const url = 'http://localhost:3000/users/';
interface UserProps {
  id?: number,
  name?: string,
  age?: number
}
type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {}
  constructor(private data: UserProps) {}
  get(propName: string): (number | string) {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if(!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
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