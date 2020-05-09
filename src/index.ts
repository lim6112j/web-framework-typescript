import { User } from './models/User';

const user = new User({id: 1});
user.events.on('click', () => console.log('click evnet !!'))
user.events.trigger('click')