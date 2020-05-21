const { client } = require('./queries');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
const path = require('path');

client.query(`
DROP TABLE IF EXISTS products;

CREATE TABLE products (
  sku INTEGER NOT NULL PRIMARY KEY,
  product_title VARCHAR(50) NOT NULL,
  sale_price NUMERIC(30,2) NOT NULL,
  msrp NUMERIC(30,2) NOT NULL,
  quantity INTEGER NOT NULL,
  category VARCHAR(25) NOT NULL
);
`)
  .then(console.log('Products table created'))
  .catch(err => {
    console.log('Error creating products table');
    console.error(err)
  })
  .then(() => {
    const stream = client.query(copyFrom('COPY products FROM STDIN CSV HEADER'));
    const fileStream = fs.createReadStream(path.join(__dirname, '../../data.csv'));
    fileStream.on('error', (error) => {
      console.log(`Error reading file: ${error}`);
    })
    stream.on('error', error => {
      console.log(`Error in copy cmd: ${error}`)
    })
    stream.on('finish', () => {
      console.log('WOW! We loaded 10M items!')
      client.end();
    })
    fileStream.pipe(stream)
  })