var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const mediaHandler = require('./handler/media')

/* POST media listing. */
router.post('/', mediaHandler.create);

module.exports = router;
