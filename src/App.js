import React, { Component } from 'react';
import { connect } from 'react-redux';
import BittrexDataFetch from './Actions/BittrexDataFetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.BittrexDataFetch()
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
  return {
    bittrex: state.bittrex.bittrexData,
    hasErrored: state.bittrex.hasErrored,
    isLoading: state.bittrex.isLoading,
    errorMessage: state.bittrex.errorMessage
  };
};

export default connect(mapStateToProps, { BittrexDataFetch })(App);
