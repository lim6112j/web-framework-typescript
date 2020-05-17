import { User } from "../models/User";
import { View } from "./view";

export class UserForm extends View<User> {
  eventsmap(): {[key: string]: () => void} {
    return {
      'click:.change-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick
    };
  };
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
  constructor(public parent: Element, public model: User){
    super(parent, model);
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
}