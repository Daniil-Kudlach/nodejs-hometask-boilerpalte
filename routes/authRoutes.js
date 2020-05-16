const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', (req, res, next) => {
        try {
                // TODO: Implement login action (get the user if it exist with entered credentials)
                const {email, password} = req.body;
                const data = AuthService.login({email});
                if (password === data.password) {
                  res.data = data;
                } 
            } catch (err) {
                res.err = err;
            } finally {
                next();
            }
        next();
}, responseMiddleware);

module.exports = router;
