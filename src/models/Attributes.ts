export class Attributes<P> {
  constructor(public data: P){}

  get = <K extends keyof P>(key: K): P[K] => {
    return this.data[key];
  }
  set= (update: P): void => {
    Object.assign(this.data, update);
  }
  getAll = () => this.data;
}