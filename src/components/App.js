import React, { Component } from "react";
import '../styles/main.css';
import app from './App';
let axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '134511',
      product_info: '',
      isRendered: false
    };
    this.getPrice = this.getPrice.bind(this);
  }
  componentDidMount(){
    this.getPrice();
  }
  getPrice(){
    axios.get('http://localhost:9003/api/price',{params:{sku: this.state.sku}})
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

