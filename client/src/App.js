import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rides from './components/Rides';
import InputBar from './components/InputBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      filter: false
    }
  }

  filterList = () => {
    this.setState({filter: true});
    console.log("FILTER!");
    console.log(this.state.filter);
  }

  resetList = () => {
    this.setState({filter: false});
    console.log("RESET!");
    console.log(this.state.filter);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pool Party</h1>
          <InputBar filterList={this.filterList} resetList={this.resetList}/>
        </header>
        <Rides filterValue={this.state.filter} className="mt-3"/>
      </div>
    );
  }
}

export default App;
