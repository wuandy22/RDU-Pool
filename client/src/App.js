import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rides from './components/Rides';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RDU Pool</h1>
        </header>
        <Rides />
      </div>
    );
  }
}

export default App;
