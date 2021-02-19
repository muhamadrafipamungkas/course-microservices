var express = require('express');
var router = express.Router();

const myCoursesHandler = require('./handler/my-courses')

/* GET media listing. */
router.get('/', myCoursesHandler.get)

/* POST media listing. */
router.post('/', myCoursesHandler.create)

module.exports = router;
