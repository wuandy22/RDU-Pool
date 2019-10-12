import React, { Component } from 'react';
import './customers.css';

class Rides extends Component {
  constructor() {
    super();
    this.state = {
      rides: []
    };
  }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(rides => this.setState({rides}, () => console.log('Items fetched...', rides)));
  }

  render() {
    return (
      <div>
        <h2>Rides</h2>
        <ul>
        {this.state.rides.map(ride => 
          <div>
            <li key={ride.id}>{ride.name} </li>
            <li key={ride.id}>{ride.college}</li>
          </div>
        )}
        </ul>
      </div>
    );
  }
}

export default Rides;
