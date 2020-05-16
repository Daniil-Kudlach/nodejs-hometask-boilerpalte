const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    getFighters(){
      const fighters = FighterRepository.getAll();
      if(!fighters) {
          throw Error('No fighters in db');
      }
      return fighters;
    }

    create(fighter) {
        let created = FighterRepository.create(fighter);
        if(!created) {
            throw Error('Fighter not created');
        }
        return created;
    }

    remove(id){
      const removed = FighterRepository.remove(id);
      if(!removed) {
          throw Error('Fighter not removed');
      }
      return removed;
    }

    update(id, info){
      const result = FighterRepository.update(id, info);
      if(!result) {
          throw Error('Fighter not updated');
      }
      return result;
    }

    search(search) {
        const fighter = FighterRepository.getOne(search);
        if(!fighter) {
            throw Error('Fighter not found');
        }
        return fighter;
    }
}

module.exports = new FighterService();
