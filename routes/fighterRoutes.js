const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', (req, res, next) => {
    try{
      const fighters = FighterService.getFighters();
      if (fighters) {
        res.status(200)
        res.data = fighters;
      }
    }catch (err) {
      res.status(400)
        res.err = err;
    } finally {
      next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
  try{
    const id = req.params.id;
    const foundFighter = FighterService.search({ id });
    if (foundFighter) {
      res.status(200)
      res.data = foundFighter;
    }
  }catch (err) {
    res.status(400)
      res.err = err;
  } finally {
      next();
  }
}, responseMiddleware);

router.post('/', createFighterValid, (req, res, next) => {
  try{
    const validFighter = req;
    const result = UserService.create(validFighter);
    if (result) {
      res.status(200)
      res.data = result;
    }
  }catch (err) {
res.status(400)
      res.err = err;
  } finally {
      next();
  }
}, responseMiddleware);

router.put('/:id', updateFighterValid, (req, res, next) => {
try{
  const id = req.params.id;
  const updatedFighter = FighterService.update(id, fighterInfo);
  if (updatedFighter) {
    res.status(200)
    res.data = updatedFighter;
  }
}catch (err) {
    res.status(400)
    res.err = err;
} finally {
    next();
}
}, responseMiddleware);


router.delete('/:id', (req, res, next) => {
  try{
    const id = req.params.id;
    const deletedFighter = FighterService.remove(id);
    if (deletedFighter) {
      res.status(200)
      res.data = updatedFighter;
    }
  }catch (err) {
    res.status(400)
      res.err = err;
  } finally {
      next();
  }
}, responseMiddleware);

module.exports = router;
