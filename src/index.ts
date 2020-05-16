import { UserCollection } from './models/UserCollection';
import { User } from './models/User';
import { UserProps } from './types/UserProps';

// const userCollection = new UserCollection();
// userCollection.collection.on('change', () => {
//   console.log(userCollection.collection)
// })
// userCollection.collection.fetch();
const userCollection = User.buildUserCollection();
userCollection.on('change', () => {console.log(userCollection)});
userCollection.fetch();