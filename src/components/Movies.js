import React, { Component } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

export class Movies extends Component {
  render() {
    return (
      <Card style={{ width: '25rem' }} bg='secondary' text='light' className='shadow mb-2' >
        <Card.Body>
          <Col>
            <Row>Title: {this.props.title} </Row>
            <Row> Overview: {this.props.overview}</Row>
            <Row> Votes: {this.props.average_vote}</Row>
            <Row>TotalVotes: {this.props.total_votes}</Row>
            <Row> <img src={`https://image.tmdb.org/t/p/w500${this.props.image_url}`}  alt={this.props.title} /> </Row>
            <Row>Popularity: {this.props.popularity}</Row>
          </Col>
        </Card.Body>
      </Card>

    );
  }
}

export default Movies;