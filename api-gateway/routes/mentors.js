var express = require('express');
var router = express.Router();

const mentorsHandler = require('./handler/mentors')

const verifyToken = require('./../middlewares/verifyToken')

/* GET media listing. */
router.get('/', mentorsHandler.getAll)

module.exports = router;
