const express = require('express');
const App = express();
const path =require('path');
const PORT = 9003;
const db = require('./database/queries.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const responseTime = require('response-time');

//middlewware
App.use(cors());
App.use(express.static(path.join(__dirname, '../dist' )));
App.use(responseTime());

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

App.get("/", (req, res) => {
  res.send("success connected FEC server to client");
});

App.post('/product', (req, res) => {
  const args = [req.body.sku, req.body.product_title, req.body.sale_price, req.body.msrp, req.body.quantity, req.body.category];
  db.create1(args, (err, result) => {
    if (err) {
      res.status(500).send(`Error adding: ${args}`);
    } else {
      res.status(200).send(`Added: ${args}`)
    }
  })
})

App.get('/price/:sku', (req, res) => {
  db.read1(req.params.sku, (err, productInfo) => {
    if (err) {
      res.status(404).send('Error getting product from db'); // 404 Not Found
    } else {
      res.send(productInfo.rows[0]);
    }
  })
});

App.put('/product', (req, res) => {
  const updates = [req.body.sku, req.body.product_title, req.body.sale_price, req.body.msrp, req.body.quantity, req.body.category];
  db.update1(updates, (err, result) => {
    if (err) {
      res.status(500).send(`Error updating sku: ${req.body.sku}`);
    } else {
      res.status(200).send(`Updated sku: ${req.body.sku}`)
    }
  })
})

App.delete('/product', (req, res) => {
  db.delete1([req.body.sku], (err, results) => {
    if (err) {
      res.status(500).send(`Error deleting sku: ${req.body.sku}`);
    } else {
      res.status(200).send(`Deleted sku: ${req.body.sku}`)
    }
  })
})

App.listen (PORT,(err) => {
  if(err){
    console.log("App.listen broke")
  }else{
    console.log(`server successfully running on ${PORT}`)
  }
});