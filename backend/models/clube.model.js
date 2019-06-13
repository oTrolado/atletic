const client = require('../config/conexao');

const model = {};

model.listAll = (callback) => {
    client.query('SELECT * FROM Clube', callback);
}

model.list = (cod, callback) => {
    client.query('SELECT * FROM Clube WHERE clb_codigo = '+ cod, callback);
}

model.create = (clb, callback) => {
    console.log(clb);
    client.query("INSERT INTO Clube(clb_nome, clb_pais, clb_atletasEstrangeiros) VALUES('"+clb.clb_nome+"','"+clb.clb_pais+"', '"+clb.clb_atletasEstrangeiros+"');",callback);
}

model.update = (clb, callback) => {
    client.query("UPDATE Clube SET clb_nome = '"+clb.clb_nome+"', clb_pais = '"+clb.clb_pais+"', clb_atletasEstrangeiros = '"+clb.clb_atletasEstrangeiros+"' WHERE clb_codigo = "+ clb.clb_codigo, callback);
}

model.delete = (cod, callback) => {
    client.query('DELETE FROM Clube WHERE clb_codigo = '+cod, callback);
}

module.exports = model;