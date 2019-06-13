const Clube = require('../models/clube.model');

const controller = {};

controller.listarTodos = (req, res) => {
    Clube.listAll((erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            console.log(resp);
            res.json(resp).end();
        }
    });
}

controller.listar = (req, res) => {
    Clube.list(req.params.cod, (erro, resp) => {
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
    
    Clube.create(req.body, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(201);
        }
    });
}

controller.atualizar = (req, res) => {
    
    Clube.update(req.body, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(200);
        }
    });
}

controller.deletar = (req, res) => {
    Clube.delete(req.params.cod, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(200);
        }
    });
}

module.exports = controller;
