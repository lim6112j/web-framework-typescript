import { eventNames } from "cluster";

export class UserForm {
  eventsmap(): {[key: string]: () => void} {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHover
    }
  }
  onButtonClick(): void {
    console.log('hi there')
  }
  onHover(): void {
    console.log('on hover on h1')
  }
  constructor(public parent: Element){}
  template(): string {
    return `
    <div>
      <h1> User Form </h1>
      <input> </input>
      <button>click me</button>
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