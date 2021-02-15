var express = require('express');
var router = express.Router();

const userHandler = require('./handler/users')

/* POST users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);

module.exports = router;
