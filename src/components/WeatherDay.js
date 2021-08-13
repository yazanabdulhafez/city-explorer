import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

export class WeatherDay extends Component {
  render() {
    return (
      <ListGroup.Item style={{ backgroundColor: '#6930c3', color: 'white', marginBottom: '2px' }}>

        <Col>
          <Row>{this.props.date}</Row>
          <Row> </Row>
          <Row>{this.props.description}</Row>
        </Col>

      </ListGroup.Item>
    );
  }
}

export default WeatherDay;
