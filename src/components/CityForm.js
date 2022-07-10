import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.sass';

export class CityForm extends Component {
  render() {
    return (
      <Form className='form' onSubmit={(e) => this.props.submitHandler(e)}>
        <fieldset>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Search By City Name"
              onChange={(e) => { this.props.getUserInputHandler(e) }} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
          </Button>

        </fieldset>
      </Form>
    );
  }
}

export default CityForm;
