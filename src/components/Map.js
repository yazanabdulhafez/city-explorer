import React, { Component } from 'react'
require ('dotenv').config();
const key=process.env.REACT_APP_ACCESS_TOKEN;

export class Map extends Component {
  render() {
        return (
          <img className='map' src={`https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480`} alt="" />  
        )
    }
}

export default Map;