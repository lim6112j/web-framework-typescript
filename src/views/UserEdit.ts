import { View } from "./view";
import { User } from "../models/User";
import { UserProps } from "../types/UserProps";
import { UserForm } from "../views/UserForm";
import { UserShow } from "../views/UserShow";
export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key:string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }
  onRender() {
    // do our nesting
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
  onEditClick() {
    console.log('edit click')
  }
  template() {
    return `
    <div class="user-show"></div>
    <div class="user-form"></div>
    `
  }
}