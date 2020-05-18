import { CollectionView } from "./CollectionView";
import { User } from "../models/User";
import Axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from "../types/UserProps";
import { Collection } from "../models/Collection";
const rootUrl = 'http://localhost:3000/users'
interface response {
  data: [{}]
}
export class UserList extends CollectionView<User> {
  constructor(public parent: Element, public userL: Collection<User, UserProps>){
    super(parent);
  }
  template() {
    return `
    <div>${this.renderItem()}</div>
    `
  }
  models(): AxiosPromise {
    return Axios.get(rootUrl);
  }
  renderItem(): string {
    console.log(this.userL)
    this.userL.fetch();
    return this.userL.models.join('');
  }
}