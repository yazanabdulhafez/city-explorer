import React, { Component } from 'react';
import Movie from './Movie';

export class Movies extends Component {
  render() {
    return (

      <Movie

        title={this.props.element.title}
        overview={this.props.element.overview}
        average_vote={this.props.element.average_vote}
        total_votes={this.props.element.total_votes}
        image_url={this.props.element.image_url}
        popularity={this.props.element.popularity}
        released_on={this.props.element.released_on}

      />

    );
  }
}

export default Movies;
