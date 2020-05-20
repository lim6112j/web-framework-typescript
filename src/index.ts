import { User } from './models/User';
import { Subscription } from 'rxjs';
const log = (msg, v) => console.log(msg, " => ", v);
const user = new User({name: 'lim', age: 20});
user.set({name: 'jaim'})
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
user.save(user.attrs.data)