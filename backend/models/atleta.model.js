const client = require('../config/conexao');

const model = {};

model.listAll = (callback) => {
    client.query('SELECT * FROM Atleta A INNER JOIN Modalidade M ON A.atl_mod = M.mod_codigo ORDER BY A.atl_nome', callback);
}

model.list = (cod, callback) => {
    client.query('SELECT * FROM Atleta A INNER JOIN Modalidade M ON A.atl_mod = M.mod_codigo WHERE atl_codigo = '+ cod, callback);
}

model.create = (atl, callback) => {
    console.log(atl);
    client.query("INSERT INTO Atleta(atl_mod, atl_nome, atl_pais, atl_nascimento, atl_estado, atl_cidade) VALUES('"+atl.atl_mod+"','"+atl.atl_nome+"', '"+atl.atl_pais+"', '"+atl.atl_nascimento+"', '"+atl.atl_estado+"', '"+atl.atl_cidade+"');",callback);
}

model.update = (atl, callback) => {
    client.query("UPDATE Atleta SET atl_mod = '"+atl.atl_mod+"', atl_nome = '"+atl.atl_nome+"', atl_pais = '"+atl.atl_pais+"', atl_nascimento = '"+atl.atl_nascimento+"', atl_estado = '"+atl.atl_estado+"', atl_cidade = '"+atl.atl_cidade+"' WHERE atl_codigo = "+ atl.atl_codigo, callback);
}

model.delete = (cod, callback) => {
    client.query('DELETE FROM Atleta WHERE atl_codigo = '+cod, callback);
}

module.exports = model;