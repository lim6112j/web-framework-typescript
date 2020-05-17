import { User } from "../models/User";
import { View } from "./view";
import { UserProps } from "../types/UserProps";

export class UserForm extends View<User, UserProps> {
  eventsmap(): {[key: string]: () => void} {
    return {
      'click:.change-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick,
      'click:.save-model': this.onSaveClick
    };
  };
  // below has 'this' resolution problem
  // onSetAgeClick(): void {
  //   this.model.setRandomAge();
  // }
  onSaveClick = (): void => {
    this.model.save();
  }
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
      <input placeholder="${this.model.get('name')}"> </input>
      <button class="change-name">change name</button>
      <button class="set-age">set random age</button>
      <button class="save-model">Save</button
    </div>
    `;
  };
}