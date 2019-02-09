
import React, { useState, Component } from 'react';
import Slider from './Slider';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {bananasReceived: ""}
    this.getBananas = this.getBananas.bind(this)
  }
  getBananas() {
    this.setState({bananasReceived: "Where are my bananas?"})
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={this.getBananas}
          style={{marginTop: '25vh'}}
          >
          Get Bananas
        </button>
        <p>{this.state.bananasReceived}</p>
      </div>
    );
  }
}

export default Home
