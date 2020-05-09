import { User } from './models/User';

const user = new User({name: 'lim', age:48});
user.on('click', () => {
  console.log('click event 1 triggered')
});
user.on('click', () => {
  console.log('click event 2 triggered')
})
setTimeout(() => {
  user.trigger('click')
}, 1000);
console.log(user)