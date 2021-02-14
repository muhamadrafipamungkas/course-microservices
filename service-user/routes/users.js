const express = require('express');
const router = express.Router();

const userHandler = require('./handler/users')

/* POST users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);

/* PUT users listing. */
router.put('/update', userHandler.update);

module.exports = router;
