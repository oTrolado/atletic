const Atleta = require('../models/atleta.model');

const controller = {};

controller.listarTodos = (req, res) => {
    Atleta.listAll((erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            resp.map( atleta => atleta.atl_nascimento = new Date(atleta.atl_nascimento).toLocaleDateString('pt-BR'));
            res.json(resp).end();
        }
    });
}

controller.listar = (req, res) => {
    Atleta.list(req.params.cod, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.json(resp).end();
        }
    });
}

controller.criar = (req, res) => {

    req.body.atl_nascimento = new Date(req.body.atl_nascimento).toISOString().substr(0, 10);
    console.log(req.body);
    
    Atleta.create(req.body, (erro, resp) => {
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
    Atleta.update(req.body, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(200);
        }
    });
}

controller.deletar = (req, res) => {
    Atleta.delete(req.params.cod, (erro, resp) => {
        if(erro){
            console.error(erro);
            throw erro;
        } else {
            res.sendStatus(200);
        }
    });
}

module.exports = controller;
