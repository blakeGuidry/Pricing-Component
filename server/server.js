const express = require('express');
const App = express();
const path =require('path');
const PORT = 9003;
const queries =require('./database/queries');
const bodyParser = require('body-parser');
const cors = require('cors');

//middlewware
App.use(express.static(path.join(__dirname, './src/build' )));
App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

App.get("/", (req, res) => {
  res.send("success connected FEC server to client");
});
//TODO: refactor to use queries.getPrice below
App.get('/api/price', (req, res) => {
  queries.getAll((err, Price) => {
    if (err) {
      res.status(404).send('error in server could not get the Price!'); // 404 Not Found
    } else {
      res.send(Price);
    }
  })
});


App.listen (PORT,(err) => {
  if(err){
    console.log("App.listen broke")
  }else{
    console.log(`server successfully running on ${PORT}`)
  }
});