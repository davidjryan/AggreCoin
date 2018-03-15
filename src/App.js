import React, { Component } from 'react';
import GraphContainer from './Containers/GraphContainer/GraphContainer';
import InterfaceContainer from './Containers/InterfaceContainer/InterfaceContainer';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>aggreCoin</h1>
        </header>
        <main>
          <GraphContainer />
          <InterfaceContainer />
        </main>
      </div>
    );
  }
}
