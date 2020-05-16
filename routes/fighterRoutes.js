const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', (req, res) => {
  const fighters = FighterService.getFighters();
  if (fighters) {
    res.json({error:false, body:fighters});
  } else {
    res.json({
      error: true,
      message: 'Have no fighters',
    });
  }
}, responseMiddleware);

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const foundFighter = FighterService.search({ id });
  if (foundFighter) {
    res.json({error:false, body:foundFighter});
  } else {
    res.json({ error: true, message: 'No fighter with such id' });
  }
}, responseMiddleware);

router.post('/', createFighterValid, (req, res) => {
  const validFighter = req;
  if (validFighter) {
    const result = UserService.create(validFighter);
    res.json({result});
  }
});

router.put('/:id', updateFighterValid, (req, res) => {
  const id = req.params.id;
  const updatedFighter = FighterService.update(id, fighterInfo);
  if (updatedFighter) {
    res.json(updatedFighter);
  } else {
    res.json({
      error: true,
      message: 'No fighter with such id',
    });
  }
});


router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deletedFighter = FighterService.remove(id);
  if (deletedFighter) {
    res.json(deletedFighter);
  } else {
    res.json({
      error: true,
      message: 'No fighter with such id',
    });
  }
}, responseMiddleware);

module.exports = router;
