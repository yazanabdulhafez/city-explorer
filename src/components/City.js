import React, { Component } from 'react'

export class City extends Component {
    render() {
        return (
          this.props.display&& <div>
                <h1>{this.props.cityName}</h1>
                <h2>{this.props.lat}</h2>
                <h2>{this.props.lon}</h2>
            </div>
        )
    }
}

export default City;