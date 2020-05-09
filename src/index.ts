import { User } from './models/User';

const user = new User({id: 1});
user.set({name: 'New Name', age: 9999})
user.save()