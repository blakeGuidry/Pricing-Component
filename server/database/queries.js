const mysql = require('mysql');
const mysqlConfig = require('./config.js');

let connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
    if (err) {
        console.log('error database connection', err);
    }
    console.log('connected db');
});





//module.exports. = ;