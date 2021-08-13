import React, { Component } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';

export class CityForm extends Component {
  render() {
    return (
      <Form className='form' onSubmit={( e ) => this.props.submitHandler( e )}>
        <Form.Label style={{ color: '#000', fontSize: '1.1rem' }}>City Name</Form.Label>
        <Row className='formRow'>
          <Col xs='auto' className='my-1'>
            <Form.Control style={{ width: '310px' }} size='lg' type='text' onChange={( e ) => { this.props.getUserInputHandler( e ); }} placeholder='search by City name' />
          </Col>
          <Col xs='auto' className='my-1'>
            <Button style={{ width: '100px' }} size='lg' type='submit'>Explore!</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CityForm;
