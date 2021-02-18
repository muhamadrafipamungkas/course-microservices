var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const coursesHandler = require('./handler/courses')

const verifyToken = require('./../middlewares/verifyToken')

/* GET media listing. */
router.get('/', coursesHandler.getAll)
router.get('/:id', coursesHandler.get)

/* POST media listing. */
router.post('/', verifyToken, coursesHandler.create)

/* PUT media listing. */
router.put('/:id', verifyToken, coursesHandler.update)

/* DELETE media listing. */
router.delete('/:id', verifyToken, coursesHandler.destroy)

module.exports = router;
