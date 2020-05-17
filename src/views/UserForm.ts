import { User } from "../models/User";

export class UserForm {
  eventsmap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick
    }
  }
  // below has 'this' resolution problem
  // onSetAgeClick(): void {
  //   this.model.setRandomAge();
  // }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  constructor(public parent: Element, private model: User){}
  template(): string {
    return `
    <div>
      <h1> User Form </h1>
      <div> User Name : ${this.model.get('name')}</div>
      <div> User Age : ${this.model.get('age')}</div>
      <input> </input>
      <button>click me</button>
      <button class="set-age">set random age</button>
    </div>
    `;
  };
  bindEvents(fragment: DocumentFragment): void {
    const eventsmap = this.eventsmap();
    for(let eventkey in eventsmap) {
      const [eventName, selector] = eventkey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsmap[eventkey])
      })
    } 
  }
  render() {
    const templpateElement = document.createElement('template');
    templpateElement.innerHTML = this.template();
    this.bindEvents(templpateElement.content);
    this.parent.appendChild(templpateElement.content);
  }
}