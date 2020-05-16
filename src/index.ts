import { User } from './models/User';
const log = (msg, v) => console.log(msg, " => ", v);
const user = new User({name: 'lim', age: 20});
log('name',user.get('name'))