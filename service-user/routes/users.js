const express = require('express');
const router = express.Router();

const userHandler = require('./handler/users')

/* GET users listing. */
router.get('/:id', userHandler.getUser)

/* POST users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);

/* PUT users listing. */
router.put('/update', userHandler.update);

module.exports = router;
