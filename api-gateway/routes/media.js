var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const mediaHandler = require('./handler/media')

/* GET media listing. */
router.get('/', mediaHandler.getAll)

/* POST media listing. */
router.post('/', mediaHandler.create);

/* DELETE media listing. */
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
