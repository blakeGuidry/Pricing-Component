const { client } = require('./queries');

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
  .then(() => client.end());