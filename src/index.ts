import { User } from './models/User';
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

subs = user.fetch(1).subscribe(res => user.trigger('change'));
user.save(user.getAll())