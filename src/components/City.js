import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class City extends Component {
  render() {
    return (
      <>
        <Card bg='warning'>
          <Card.Body>
            <h1>{this.props.cityName}</h1>
          </Card.Body>
        </Card>
        <Card bg='info'>
          <Card.Body>
            <h2>Latitude is: {this.props.lat}</h2>
            <h2>Longitude is: {this.props.lon}</h2>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;
