const Modalidade = require('../models/modalidade.model');

const controller = {};

controller.listarTodos = (req, res) => {
    Modalidade.listAll((erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.json(resp).end();
        }
    });
}

controller.listar = (req, res) => {
    Modalidade.list(req.params.cod, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.json(resp).end();
        }
    });
}

controller.criar = (req, res) => {
    console.log(req.body);
    Modalidade.create(req.body, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(201);
        }
    });
}

controller.atualizar = (req, res) => {
    console.log(req.body);
    Modalidade.update(req.body, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(200);
        }
    });
}

controller.deletar = (req, res) => {
    Modalidade.delete(req.params.cod, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(200);
        }
    });
}

module.exports = controller;