import React, { Component } from 'react';
import { Card, } from 'react-bootstrap';

export class Movie extends Component {
  render() {
    return (

      <Card text='white'
        className='text-center p-3'
        style={{
          backgroundColor: '#023047',
          display: 'inline-block',
          width: '360px',
          height: '500px',
          margin: '20px',
          overflow: 'auto',
        }} >
        <Card.Title>Title: {this.props.title}  </Card.Title>
        <Card.Img
          style={{ maxHeight: '350px' }}
          variant='top'
          src={`https://image.tmdb.org/t/p/w500${this.props.image_url}`}
          alt={this.props.title}

        />
        <Card.Body>

          <Card.Text> Total votes = {this.props.total_votes} </Card.Text>
          <Card.Text> Vote average: {this.props.average_vote} </Card.Text>
          <Card.Text>Popularity: {this.props.popularity} </Card.Text>
          <Card.Text> Released date: {this.props.released_on} </Card.Text>
          <Card.Text> Review: {this.props.overview} </Card.Text>

        </Card.Body>
      </Card>

    );
  }
}

export default Movie;
