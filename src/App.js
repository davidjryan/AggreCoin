import React, { Component } from 'react';
import { connect } from 'react-redux';
import BittrexDataFetch from './Actions/BittrexDataFetch';
import PoloniexDataFetch from './Actions/PoloniexDataFetch';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.BittrexDataFetch()
    this.props.PoloniexDataFetch()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { bittrexData, hasErrored, isLoading, errorMessage } = state.bittrex;

  return {
    isLoading,
    bittrexData,
    hasErrored,
    errorMessage
  };
};

export default connect(mapStateToProps, { BittrexDataFetch, PoloniexDataFetch })(App);
