import { View } from "./view";
import { User } from "../models/User";
import { UserProps } from "../types/UserProps";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key:string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }
  onEditClick() {
    console.log('edit click')
  }
  template() {
    return `
    <div class="user-show></div>
    <div class="user-form"></div>
    `
  }
}