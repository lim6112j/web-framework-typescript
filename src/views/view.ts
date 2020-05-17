// import { User } from '../models/User';
interface HasOn {
  on: (ev: string, fn:() => void) => void
}
export abstract class View<T extends HasOn> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  abstract eventsmap(): {[key: string]: () => void};
  abstract template(): string;
  bindEvents(fragment: DocumentFragment): void {
    const eventsmap = this.eventsmap();
    for(let eventkey in eventsmap) {
      const [eventName, selector] = eventkey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsmap[eventkey])
      })
    } 
  }
  bindModel():void {
    this.model.on('change', () => this.render())
    // ()=>this.render : OK
    // this.render : this problem so should => this.render.bind(this)
  }
  render() {
    this.parent.innerHTML = '';
    const templpateElement = document.createElement('template');
    templpateElement.innerHTML = this.template();
    this.bindEvents(templpateElement.content);
    this.parent.appendChild(templpateElement.content);
  }
}