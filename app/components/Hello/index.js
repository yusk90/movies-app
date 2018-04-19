import React, { Component } from 'react';

class Hello extends Component {
  onClick() {
    debugger;
    console.log('Hello World!!!');
  }

  render() {
    return <button onClick={this.onClick}>Click</button>;
  }
}

export default Hello;
