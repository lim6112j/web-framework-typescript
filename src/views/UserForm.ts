import { User } from "../models/User";

export class UserForm {
  eventsmap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.change-name': this.onSetNameClick
    }
  }
  // below has 'this' resolution problem
  // onSetAgeClick(): void {
  //   this.model.setRandomAge();
  // }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    input ? this.model.set({name: input.value}) : null;
    // if(input) {
    //   const name = input.value;
    //   this.model.set({name});
    // }
  }
  constructor(public parent: Element, private model: User){
    this.bindModel();
  }

  template(): string {
    return `
    <div>
      <h1> User Form </h1>
      <div> User Name : ${this.model.get('name')}</div>
      <div> User Age : ${this.model.get('age')}</div>
      <input> </input>
      <button class="change-name">change name</button>
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