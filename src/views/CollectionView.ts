import { AxiosResponse, AxiosPromise } from "axios";
import { Collection } from "../models/Collection";
import { Model } from "../models/Model";

export abstract class CollectionView<T, P> {
  constructor(public parent: Element, public collection: Collection<T, P>) {}
  abstract template(): string;
  abstract renderItem(model: T, parent: Element): string;

  render() {
    this.parent.innerHTML ='';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.parent.appendChild(templateElement.content);
  }
}