let express = require('express');
let router = express.Router();
let controller = require('../controllers/atleta.controller');

router.get('/', controller.criar);

module.exports = router;
