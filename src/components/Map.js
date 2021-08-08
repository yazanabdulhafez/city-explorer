import React, { Component } from 'react'

export class Map extends Component {
  render() {
        return (
          this.props.display&&<img className='map' src={`https://maps.locationiq.com/v3/staticmap?key=pk.90e83a34a05295eeece1fac5b10f0d22&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480`} alt="" />  
        )
    }
}

export default Map;