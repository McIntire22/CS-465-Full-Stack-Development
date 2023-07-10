var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/main');
router.get('/', controller.index);

module.exports = router;
