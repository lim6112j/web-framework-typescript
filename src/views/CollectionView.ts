import { AxiosResponse, AxiosPromise } from "axios";

export abstract class CollectionView<T> {
  constructor(public parent: Element) {}
  abstract template(): string;
  abstract renderItem(): string;
  abstract models(): AxiosPromise;
  render() {
    this.parent.innerHTML ='';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.parent.appendChild(templateElement.content);
  }
}