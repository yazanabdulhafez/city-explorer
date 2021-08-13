import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
require( 'dotenv' ).config();
const key = process.env.REACT_APP_ACCESS_TOKEN;

export class Map extends Component {
  render() {
    return (
      <Card bg='success' >
        <Card.Title style={{ textAlign: 'center', paddingTop: '25px' }}>CITY MAP</Card.Title>
        <Card.Body>
          <img style={{ width: '100%' }} className='map' src={`https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480`} alt="" />
        </Card.Body>
      </Card>
    );
  }
}

export default Map;
