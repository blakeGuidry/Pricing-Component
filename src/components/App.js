import React, { Component } from "react";
import '../styles/main.css';
import app from './App';
let axios = require('axios');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
      sku: '134511',
      test: ''
    };
    this.getPrice = this.getPrice.bind(this);
  }
  componentDidMount(){
    this.getPrice()
  }
  getPrice(){
    axios.get('http://localhost:9003/api/price',{ params: {sku: this.state.sku}})
    .then(res => {
      console.log('success!')
      const test = res.data
      this.setState({test})
     })
    .catch( err => {
        console.log("whoops!",err);
    })
  }


  render() {
    return (
      <div>
        <p>{this.state.test}</p>

      </div>
    );
  }
}

