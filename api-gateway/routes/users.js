var express = require('express');
var router = express.Router();

const userHandler = require('./handler/users')
const verifyToken = require('./../middlewares/verifyToken')

/* POST users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.post('/logout', verifyToken, userHandler.logout);

/* PUT users listing. */
router.put('/', verifyToken, userHandler.update);

/* GET users listing. */
router.get('/', verifyToken, userHandler.getUser);

module.exports = router;
