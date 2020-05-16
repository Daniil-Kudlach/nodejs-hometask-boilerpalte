const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.get('/', (req, res) => {
  const users = UserService.getUsers();
  if (users) {
    res.json(users);
  } else {
    res.status(404).json({
      error: true,
      message: 'No users in db',
    });
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const foundUser = UserService.search({ id });
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({
      error: true,
      message: 'No user with such id',
    });
  }
});

router.post('/', createUserValid, (req, res) => {
  const validUser = req.user;
  if (validUser) {
    const result = UserService.create(validUser);
    res.json({result});
  }
});

router.put('/:id', updateUserValid, (req, res) => {
  const id = req.params.id;
  const userInfo = req.body;
  const updatedUser = UserService.update(id, userInfo);
  if (updatedUser) {
    res.json(updatedUser);
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deletedUser = UserService.remove(id);
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({
      error: true,
      message: 'No user with such id',
    });
  }
});

module.exports = router;
