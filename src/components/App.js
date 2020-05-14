import React, { Component } from "react";
//HEEELLLLLLPPPPPPPPPPP
//This means your commit was successful buddy congrats you didnt lose a weeks worth of css , docker and AWS
import PriceMatch from './PriceMatch/PriceMatch.js';
import Fullfillment from './Fullfillment/Fullfillment.js';
import AddToCart from './AddToCart/AddToCart.js';
//import app from './App';
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
    //gets price
    this.getPrice();
    //need to add some type of event listener that updates sku
      //getprice
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


  render() {
    return (
      <div>
        <PriceMatch matching={this.state.msrp} pricing={this.state.price}/>
        <Fullfillment  availability ={this.state.quantity} />
        <AddToCart productInCart = {this.state.product_info} />



      </div>
    );
  }
}
export default App;

