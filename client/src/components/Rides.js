import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import './rides.css';

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
        <ListGroup>
        {this.state.rides.map(ride => {
          
          var date = new Date(ride.date);
          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          return(<ListGroupItem key={ride.id}>
            <div>{ride.name}</div>
            <div>{ride.college}</div>
            <div>{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</div>
            <div>{date.getHours()}:{date.getMinutes()}</div>
          </ListGroupItem>);
        }
        )}
        </ListGroup>
      </div>
    );
  }
}

export default Rides;
