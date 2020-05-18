import { Model } from '../models/Model';
import { UserProps } from '../types/UserProps';
export abstract class View<T extends Model<K>, K> {
  regions: {[key:string]: Element} = {};
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  abstract template(): string;
  eventsmap(): {[key: string]: () => void} {
    return {};
  };
  regionsMap(): {[key: string]: string} {
    return {};
  }
  bindEvents(fragment: DocumentFragment): void {
    const eventsmap = this.eventsmap();
    for(let eventkey in eventsmap) {
      const [eventName, selector] = eventkey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsmap[eventkey])
      })
    } 
  }
  bindModel():void {
    this.model.on('change', () => this.render())
    // ()=>this.render : OK
    // this.render : this problem so should => this.render.bind(this)
  }
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for(let key in regionsMap) {
      const selector:string = regionsMap[key];
      const element = fragment.querySelector(selector);
      // console.log(element)
      if(element){
        this.regions[key] = element;
      }
    }
  }
  onRender(): void {

  }
  render() {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.appendChild(templateElement.content);
  }
}