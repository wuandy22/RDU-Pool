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

          var month = date.getMonth();
          var day = date.getDate();
          var year = date.getFullYear();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var ampm = "am";

          if(minute < 10){
            minute = "0" + minute;
          }

          if(hour >= 12){
            ampm = "pm";
          }

          hour = hour%12;
          
          if(hour == 0){
            hour = 12;
          }


          return(<ListGroupItem key={ride.id}>
            <div>{ride.name}</div>
            <div>{ride.college}</div>
            <div>{months[month]} {day} {year}</div>
            <div>{hour}:{minute} {ampm}</div>
          </ListGroupItem>);
        }
        )}
        </ListGroup>
      </div>
    );
  }
}

export default Rides;
