var express = require('express');
var router = express.Router();
let controller = require('../controllers/modalidade.controller');

router.get('/', controller.criar);
module.exports = router;
