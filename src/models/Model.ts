import axios, { AxiosResponse } from 'axios';

import { Observable } from 'rxjs';
interface Sync<P> {
  fetch<P>(id: number): Observable<AxiosResponse<P>>;
  save(data: P): Observable<AxiosResponse>;
}
interface Eventing {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface Attributes<P> {
  get<K extends keyof P>(key: K): P[K];
  getAll(): P;
  set(update: P): void
}
export class Model<P> {

constructor(private attrs: Attributes<P>, private sync: Sync<P>, private events: Eventing){

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
get getAll() {
  return this.attrs.getAll;
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
