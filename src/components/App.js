import React, { Component } from "react";

import PriceMatch from './PriceMatch/PriceMatch.js';
import Fullfillment from './Fullfillment/Fullfillment.js';
import AddToCart from './AddToCart/AddToCart.js';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      sku: 1,
      product_info: '',
      isRendered: false,
      price: [],
      msrp: [],
      quantity: [],
      cart: 0

    };
    this.getPrice = this.getPrice.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
  }
  componentDidMount(){
    //gets price
    this.getPrice();

    document.addEventListener('submit', () => { this.getSearchVal()
    })
  }

getSearchVal() {
      let currentItemFromSearch = document.getElementById("wilsoninputtag");
    if(currentItemFromSearch){
      let currentProd= currentItemFromSearch.value;
      this.setState({
        sku: currentProd
      },() => this.getPrice())
    }
}

  getPrice(){
    let sku = this.state.sku
    
    axios.get(`http://ec2-13-59-13-9.us-east-2.compute.amazonaws.com:9003/price/${sku}`)
    .then(res => {
      console.log(res.data)
      let product_info = res.data;
      let isRendered = true;
      let price = Number(res.data["sale_price"]);
      let msrp = Number(res.data["msrp"]);
      let quantity = res.data["quantity"];
      console.log(price)
      this.setState({
        product_info,
        isRendered,
        msrp,
        price,
        quantity
      });
    })
    .catch( err => {
        console.log("whoops!",err);

    })
  }
  addCartItem(e) {
    e.preventDefault();
    if(this.state.quantity > 0){
    this.setState(()=>{ return {
      cart: this.state.cart + 1,
      quantity: this.state.quantity -1
    }})
    }else{
      alert("sorry not sorry, it looks like we sold out of that item, please go ahead and step off! ");
    }
  }


  render() {
    return (
      <div>
        <PriceMatch matching={this.state.msrp} pricing={this.state.price}/>
        <Fullfillment  availability ={this.state.quantity} />
        <AddToCart productInCart = {this.state.product_info} cartNav = {this.state.cart} cartAdd ={this.addCartItem}/>



      </div>
    );
  }
}
export default App;

