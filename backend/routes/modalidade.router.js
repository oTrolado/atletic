var express = require('express');
var router = express.Router();
let controller = require('../controllers/modalidade.controller');

router.get('/:cod', controller.listar);
router.post('/', controller.criar);
router.put('/', controller.atualizar);
router.delete('/:cod', controller.deletar);

module.exports = router;
