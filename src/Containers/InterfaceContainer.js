import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coinPrime, coinSecond } from './helper';
import './InterfaceContainer.css';

class InterfaceContainer extends Component {

  render() {
    return (
      <section>
        <select>{coinPrime}</select>
        <select>{coinSecond}</select>
      </section>
    )
  }
}

export default InterfaceContainer;