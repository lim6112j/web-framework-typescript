import { CollectionView } from "./CollectionView";
import { User } from "../models/User";
import Axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from "../types/UserProps";
import { Collection } from "../models/Collection";
const rootUrl = 'http://localhost:3000/users'
interface response {
  attrs: {
    data: {
      name: string
    }
  }
}
export class UserList extends CollectionView<User, UserProps> {
  constructor(public parent: Element, public collection: Collection<User, UserProps>){
    super(parent, collection);
    this.collection.fetch();
  }
  template() {
    return `
    <div>${this.renderItems()}</div>
    `
  }
  renderItems() {
    this.collection.models.forEach(user => {
      this.renderItem(user, this.parent);
    })
  }
  renderItem(model: User, parent: Element): string {
    let templt = '';
    console.log(this.collection)
    
    this.collection.models.forEach((user: User) => {
      console.log(user)
      // user.get.bind(user);
      // const userName = user.get('name');
      // templt = templt.concat(userName ? userName : '')
    });
    console.log(templt)
    return templt;
  }
}