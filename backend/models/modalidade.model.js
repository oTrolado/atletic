const client = require('../config/conexao');

const model = {};

model.listAll = (callback) => {
    client.query('SELECT * FROM Modalidade', callback);
}

model.list = (cod, callback) => {
    client.query('SELECT * FROM Modalidade WHERE mod_codigo = '+ cod, callback);
}

model.create = (mod, callback) => {
    console.log(mod.mod_descricao);
    client.query("INSERT INTO Modalidade(mod_nome, mod_descricao, mod_categoria) VALUES('"+mod.mod_nome+"','"+mod.mod_descricao+"', '"+mod.mod_categoria+"');",callback);
}

model.update = (mod, callback) => {
    client.query("UPDATE Modalidade SET mod_nome = '"+mod.mod_nome+"', mod_descricao = '"+mod.mod_descricao+"', mod_categoria = '"+mod.mod_categoria+"' WHERE mod_codigo = "+ mod.mod_codigo, callback);
}

model.delete = (cod, callback) => {
    client.query('DELETE FROM Modalidade WHERE mod_codigo = '+cod, callback);
}

module.exports = model;