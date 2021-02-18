var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const coursesHandler = require('./handler/courses')

/* GET media listing. */
// router.get('/', coursesHandler.getAll)
// router.get('/:id', coursesHandler.get)

/* POST media listing. */
router.post('/', coursesHandler.create)

/* PUT media listing. */
router.put('/:id', coursesHandler.update)

/* DELETE media listing. */
router.delete('/:id', coursesHandler.destroy)

module.exports = router;
