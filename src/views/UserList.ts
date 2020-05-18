import { CollectionView } from "./CollectionView";
import { User } from "../models/User";
import { UserProps } from "../types/UserProps";
import { UserShow } from "./UserShow";
export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, parent: Element): void {
    new UserShow(parent, model).render();
  }
}