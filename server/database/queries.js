const { Client } = require('pg');
const connection = require('./config.js');

const client = new Client(connection);

client.connect()
  .then(console.log('Connected to Elephant!'))
  .catch(e => console.log)

const create1 = (args, cb) => {
  client.query('INSERT INTO products(sku, product_title, sale_price, msrp, quantity, category) values($1, $2, $3, $4, $5, $6)', args)
    .then(res => cb(null, res))
    .catch(err => {
      console.error(err);
      cb(err, null);
    });
}

const read1 = (sku, cb) => {
  client.query('SELECT * FROM public.products WHERE sku = $1', [sku])
    .then(prod => cb(null, prod))
    .catch(err => {
      console.error(err);
      cb(err, null)
    });
}

const update1 = (update, cb) => {
  client.query('UPDATE products SET product_title = $2, sale_price = $3, msrp = $4, quantity = $5, category = $6 WHERE sku = $1', update)
    .then(res => cb(null, res))
    .catch(err => {
      console.error(err);
      cb(err, null);
    })
}

const delete1 = (sku, cb) => {
  client.delete('DELETE FROM products WHERE sku = $1', sku)
    .then(res => cb(null, res))
    .catch(err => {
      console.error(err);
      cb(err, null);
    })
}
 

module.exports = {
  client,
  create1,
  read1,
  update1,
  delete1
}
