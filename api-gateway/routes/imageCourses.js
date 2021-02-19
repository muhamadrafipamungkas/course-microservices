var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const imageCoursesHandler = require('./handler/image-courses')

/* POST media listing. */
router.post('/', imageCoursesHandler.create)

/* DELETE media listing. */
router.delete('/:id', imageCoursesHandler.destroy)

module.exports = router;
