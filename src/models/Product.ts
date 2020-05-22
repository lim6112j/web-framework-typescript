import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface ProductType {
  id?: number;
  name?: string;
  price?: number;
  supplier?: string;
}
const rootUrl = 'http://localhost:3000/products/';
export class Product extends Model<ProductType> {
  static buildProduct(attrs: ProductType): Product {
    return new Product(new Attributes<ProductType>(attrs), new Sync<ProductType>(rootUrl), new Eventing());
  }
}