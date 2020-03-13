const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fpr4y0g0',
    database: 'db-hp',
    port: 3306
})

module.exports = db;