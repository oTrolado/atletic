/*
/     configurações de acesso ao banco de dados
*/
var mysql = require('mysql');
var database = 'dados191n2';

// instanciar objeto de acesso ao banco de dados
var client = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3307
});
console.log('Connected !!!');
client.query('USE ' + database);

module.exports = client;
