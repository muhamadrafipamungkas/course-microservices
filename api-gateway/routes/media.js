var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

/* GET media listing. */
router.get('/', function(req, res, next) {
  res.send('media');
});

module.exports = router;
