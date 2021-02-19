var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const reviewsHandler = require('./handler/reviews')

/* POST media listing. */
router.post('/', reviewsHandler.create)

/* PUT media listing. */
router.put('/:id', reviewsHandler.update)

/* DELETE media listing. */
router.delete('/:id', reviewsHandler.destroy)

module.exports = router;
