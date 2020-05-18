import { AxiosResponse, AxiosPromise } from "axios";
import { Collection } from "../models/Collection";
import { Model } from "../models/Model";

export abstract class CollectionView<T, P> {
  constructor(public parent: Element, public collection: Collection<T, P>) {}
  abstract renderItem(model: T, parent: Element): void;

  render():void {
    this.parent.innerHTML ='';
    const templateElement = document.createElement('template');
    // console.log(this.collection.models)
    for(let m of this.collection.models){
      // console.log(m)
      const itemParent = document.createElement('div');
      this.renderItem(m, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.appendChild(templateElement.content);
  }
}