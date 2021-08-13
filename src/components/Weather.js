import React, { Component } from 'react';
import WeatherDay from './WeatherDay';

export class Weather extends Component {
  render() {
    return (
      this.props.weatherData.data.map( ( Element, index ) => (
        <WeatherDay key={index} description={Element.description}
          date={Element.date} />
      ) )

    );
  }
}

export default Weather;
