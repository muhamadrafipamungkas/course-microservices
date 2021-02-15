var express = require('express');
var router = express.Router();

const userHandler = require('./handler/users')
const verifyToken = require('./../middlewares/verifyToken')

/* PUT users listing. */
router.put('/', verifyToken, userHandler.update);

/* POST users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);

module.exports = router;
