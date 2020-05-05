const mysql = require('mysql');
const mysqlConfig = require('./config.js');

let connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
    if (err) {
        console.log('error database connection', err);
    }
    console.log('connected db');
});

//query helper functions

//just to render json to client testing connecion
const getAll =(callback) => {
  connection.query('SELECT * FROM products;',(err, all) => {
    if(err){
      console.log('error query db getAll', err);
      callback(err, null)
    } else {
      callback(null, all)
    }
  });
}



const getPrice = (sku,cb) => {
  connection.query('SELECT * FROM products WHERE sku = ?;', [sku] ,(err, data)=> {
    if(err){
      console.log('error query db getPrice', err);
      cb(err, null)
    } else {
      cb(null, data)
    }
  });
}



module.exports.getPrice = getPrice;
module.exports.getAll = getAll;