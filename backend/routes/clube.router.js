let express = require('express');
let router = express.Router();
let controller = require('../controllers/clube.controller');

router.get('/:cod', controller.listar);
router.get('/', controller.listarTodos);
router.post('/', controller.criar);
router.put('/', controller.atualizar);
router.delete('/:cod', controller.deletar);

module.exports = router;
