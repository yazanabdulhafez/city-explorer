import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './styles.sass';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <Card className='contact_card'>
          <Card.Body>
            <Card.Title>Contact Us</Card.Title>
            <Card.Text>
              Email Address:fso361435@gmail.com
            </Card.Text>
            <Card.Text>
              Mobile Phone:+962785834251
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Contact