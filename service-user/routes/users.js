const express = require('express');
const router = express.Router();

const userHandler = require('./handler/users')

/* GET users listing. */
router.get('/:id', userHandler.getUser)
router.get('/', userHandler.getUsers)

/* POST users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.post('/logout', userHandler.logout);

/* PUT users listing. */
router.put('/:id', userHandler.update);

module.exports = router;
