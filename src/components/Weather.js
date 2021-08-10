import React, { Component } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

export class Weather extends Component {
  render() {
    return (
      <Card style={{ width: '25rem' }}  bg='secondary' text='light' className='shadow mb-2' >
        <Card.Body>
          <Col>
            <Row>{this.props.date}</Row>
            <Row>{'  '}</Row>
            <Row>{this.props.description}</Row>
          </Col>
        </Card.Body>
      </Card>

    );
  }
}

export default Weather;