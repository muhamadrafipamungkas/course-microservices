var express = require('express');
var router = express.Router();

const mentorsHandler = require('./handler/mentors')

const verifyToken = require('./../middlewares/verifyToken')

/* GET media listing. */
router.get('/', mentorsHandler.getAll)
router.get('/:id', mentorsHandler.get)

/* POST media listing. */
router.post('/', mentorsHandler.create)

/* PUT media listing. */
router.put('/:id', mentorsHandler.update)

/* DELETE media listing. */
router.delete('/:id', mentorsHandler.destroy)

module.exports = router;
