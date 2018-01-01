import React, { Component } from 'react';
import { connect } from 'react-redux';
import BittrexDataFetch from './Actions/BittrexDataFetch';
import connection from './PoloniexDataFetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  async componentDidMount() {
    this.props.BittrexDataFetch()
    const poloniex = await connection.open()
    debugger;
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

export default connect(mapStateToProps, { BittrexDataFetch })(App);
