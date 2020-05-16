const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    create(user) {
        let created = UserRepository.create(user);
        if(!created) {
            throw Error('User not created');
        }
        return created;
    }

    getUsers(){
      const users = UserRepository.getAll();
      if(!users) {
          throw Error('No users in db');
      }
      return users;
    }

    remove(id){
      const user = UserRepository.remove(id);
      if(!user) {
          throw Error('User not found');
      }
      return user;
    }

    update(id, info){
      const result = UserRepository.update(id, info);
      if(!result) {
          throw Error('User not found');
      }
      return result;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            throw Error('User not found');
        }
        return item;
    }
}

module.exports = new UserService();
