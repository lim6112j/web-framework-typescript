import { AxiosPromise, AxiosResponse} from "axios";

interface ModelAttributes<T>{
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
  fetch(id: Number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface HasId {
  id?: number
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
export class Model<T extends HasId> {
  constructor(
    private attrs: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events 
  ){}
  // get on() {
  //   return this.events.on;
  // }
  on = this.events.on;
  // get trigger() {
  //   return this.events.trigger;
  // }
  trigger = this.events.trigger;
  // get get() {
  //   return this.attrs.get;
  // }
  get = this.attrs.get;

  set(update: T) {
    this.attrs.set(update);
    this.events.trigger('change')
  }
  fetch(): void{
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannt fetch without an id');
    }
    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }
  save() {
   this.sync.save( this.attrs.getAll()).then((response: AxiosResponse) => {
     this.trigger('save');
   })
   .catch( err => this.trigger('error'));
  }
}