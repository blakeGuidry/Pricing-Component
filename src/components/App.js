import React, { Component } from "react";

import PriceMatch from './PriceMatch/PriceMatch.js';
import Fullfillment from './Fullfillment/Fullfillment.js';
import AddToCart from './AddToCart/AddToCart.js';

let axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      sku: 'Rugged Wrist Strap',
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
    
    axios.get('http://coryprice-env.eba-3imqfzng.us-east-2.elasticbeanstalk.com/price/',{params:{sku: sku}})
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

