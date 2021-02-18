var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const chaptersHandler = require('./handler/chapters')

/* GET media listing. */
router.get('/', chaptersHandler.getAll)
router.get('/:id', chaptersHandler.get)

/* POST media listing. */
router.post('/', chaptersHandler.create)

/* PUT media listing. */
router.put('/:id', chaptersHandler.update)

/* DELETE media listing. */
router.delete('/:id', chaptersHandler.destroy)

module.exports = router;
