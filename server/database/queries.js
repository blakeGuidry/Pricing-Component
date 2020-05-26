const dse = require('dse-driver');

const client = new dse.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'sdc',
  localDataCenter: 'dc1'
})

client.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to Cassandra');
  }
});

const read1 = (sku, cb) => {
  const query = `SELECT * FROM products WHERE sku = ${sku}`
  client.execute(query, (err, results) => {
    if (err) {
      console.error(err);
      cb(err, null)
    } else {
      cb(null, results.rows[0]);
    }
  })
}

module.exports = {
  client,
  read1
}
