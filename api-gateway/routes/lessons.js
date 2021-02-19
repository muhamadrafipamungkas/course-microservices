var express = require('express');
var router = express.Router();

const lessonsHandler = require('./handler/lessons')

/* GET media listing. */
router.get('/', lessonsHandler.getAll)
router.get('/:id', lessonsHandler.get)

/* POST media listing. */
router.post('/', lessonsHandler.create)

/* PUT media listing. */
router.put('/:id', lessonsHandler.update)

/* DELETE media listing. */
router.delete('/:id', lessonsHandler.destroy)

module.exports = router;
