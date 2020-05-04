import React, { Component } from "react";
import '../styles/main.css';
import app from './App';
let axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
      sku: '134511',
      test: '',
      isRendered: false
    };
    this.getPrice = this.getPrice.bind(this);
  }
  componentDidMount(){
    this.getPrice();
  }
  getPrice(){
    axios.get('http://localhost:9003/api/price',{ params: {sku: this.state.sku}})
    .then(res => {
      console.log('success!')
      const test = res.data;
      const isRendered = true;

      this.setState({test});
      this.setState({isRendered});
    })
    .catch( err => {
        console.log("whoops!",err);
    })
  }


  render() {
    return (
      <div>
        <p>{ this.state.isRendered ? JSON.stringify(this.state.test): "hasnt loaded yet"}</p>

      </div>
    );
  }
}
export default App;

