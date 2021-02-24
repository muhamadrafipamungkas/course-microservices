var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const coursesHandler = require('./handler/courses')

const verifyToken = require('./../middlewares/verifyToken')
const can = require('./../middlewares/permission')

/* GET media listing. */
router.get('/', coursesHandler.getAll)
router.get('/:id', coursesHandler.get)

/* POST media listing. */
router.post('/', verifyToken, can('admin'), coursesHandler.create)

/* PUT media listing. */
router.put('/:id', verifyToken, can('admin'), coursesHandler.update)

/* DELETE media listing. */
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy)

module.exports = router;
