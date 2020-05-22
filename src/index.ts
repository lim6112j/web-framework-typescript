import { User } from './models/User';
import { Product } from './models/Product';
import { Subscription } from 'rxjs';
const log = (msg, v) => console.log(msg, " => ", v);
const user = User.buildUser({name: 'joo', age: 50})
user.set({name: 'gogo'})
log('name',user.get('name'))

let subs: Subscription = new Subscription;
user.on('change', () => {
  console.log('change event');
  user.trigger('unsubscribe')
})
user.on('unsubscribe', () => {
  console.log('unsubscribing')
  subs.unsubscribe();
});

subs = user.fetch(1).subscribe(res => {
  log('user 1', res.data);
  user.trigger('change');
});
user.save(user.getAll())


const product = Product.buildProduct({name: 'tv', price: 200000});
product.set({supplier: 'samsung'});
product.fetch(1).subscribe(v => log('product 1',v));
product.save(product.getAll());