/*
/     configurações de acesso ao banco de dados
*/
var mysql = require('mysql');
var database = 'dados191n';

// instanciar objeto de acesso ao banco de dados
var client = mysql.createConnection({
    user: 'root',
    host: 'localhost',
//    password: 'fatec123*',
    port: 3306
});
console.log('Connected !!!');
client.query('USE ' + database);

module.exports = client;
