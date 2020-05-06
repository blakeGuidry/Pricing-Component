import React, { Component } from "react";

import Price from './Price';
import PriceMatch from './PriceMatch';
import Fullfillment from './Fullfillment';
import AddToCart from './AddToCart';
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
    axios.get('/price',{params:{sku: 134511}})
    .then(res => {
      console.log('success!')
      let product_info = res.data;
      let isRendered = true;
      let price = res.data[0]["sale_price"];
      let msrp =res.data[0]["msrp"];
      let quantity = res.data[0]["quantity"];
      console.log(price)
      this.setState({product_info});
      this.setState({isRendered});
      this.setState({msrp});
      this.setState({price});
      this.setState({quantity});
    })
    .catch( err => {
        console.log("whoops!",err);

    })
  }


  render() {
    return (
      <div>
        <PriceMatch matching={this.state.msrp} />
        <Price pricing={this.state.price} />
        <Fullfillment availability ={this.state.quantity} />
        <AddToCart productInCart = {this.state.product_info} />



      </div>
    );
  }
}
export default App;

