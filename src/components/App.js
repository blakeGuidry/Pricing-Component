import React, { Component } from "react";
import '../styles/main.css';
import app from './App';
let axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      sku: '134511', //---> wilson
      product_info: '',
      isRendered: false,
      price: [],
      msrp: [],
      quantity: []

    };
    this.getPrice = this.getPrice.bind(this);
  }
  componentDidMount(){
    this.getPrice();
  }
  getPrice(){
    axios.get('http://localhost:9003/api/price',{params:{sku: 134511}})
    .then(res => {
      console.log('success!')
      const product_info = res.data;
      const isRendered = true;

      this.setState({product_info});
      this.setState({isRendered});
    })
    .catch( err => {
        console.log("whoops!",err);
    })
  }


  render() {
    return (
      <div>

        <p>{ this.state.isRendered ? JSON.stringify(this.state.product_info): "hasnt loaded yet"}</p>

      </div>
    );
  }
}
export default App;

