import { Collection } from './models/Collection';
import { User } from './models/User';
import { UserProps } from './types/UserProps';

const collection = new Collection<User, UserProps>('http://localhost:3000/users', (json: UserProps) => User.buildUser(json));
collection.on('change', () => {
  console.log(collection)
})
collection.fetch();