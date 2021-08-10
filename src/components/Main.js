import React, { Component } from 'react'
import City from './City';
import axios from 'axios';
import Map from './Map';
import { Form, Alert, Card, Button, Row, Col } from 'react-bootstrap';
import Weather from './Weather'
require('dotenv').config();
const key = process.env.REACT_APP_ACCESS_TOKEN;


export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: '0.0',
      lon: '0.0',
      cityName: '',
      cityDescription: '',
      warning: '',
      warningDisplay: false,
      display: false,
      displyWeather: true,
      weatherData: []
    }
  }

  getUserInputHandler = (e) => {
    this.setState({
      cityName: e.target.value
    })
    console.log(this.state.cityName);
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log('res');
    let url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${this.state.cityName}&format=json`
    axios.get(url).then(res => {
      let data = res.data[0]
      console.log(res);


      this.setState({
        cityDescription: data.display_name,
        lat: data.lat,
        lon: data.lon,
        display: true,
        warning: '',
        warningDisplay: false

      })
      // console.log(this.state.lon);
      // console.log(this.state.lat);
      // console.log(this.state.cityName);
      let axiosLocalData = axios.get(`http://localhost:${process.env.REACT_APP_PORT}/weather?searchQuery=${this.state.cityName}&lon=${this.state.lon}&lat=${this.state.lat}`)
        .then(res => {
          console.log(axiosLocalData);
          console.log(res.data);
          if (res.data !== `cant found ${this.state.cityName} use (Amman,Paris,Seattle)`) {
            this.setState({
              displyWeather: true,
              weatherData: res.data,
              warningDisplay: false
            });
          }
          else {
            this.setState({
              warning: `${res.data} `,
              displyWeather: false,
              display: false,
              warningDisplay: true
            })

          }
        }
        );

    }).catch(err => {
      console.log(err);
      this.setState({
        warning: `${err},please enter vaild city name`,
        display: false,
        warningDisplay: true
      })
    });

  }
  render() {
    return (
      <main>
        {this.state.warningDisplay && <Alert style={{ width: '80rem', margin: 'auto' }} variant='danger'>
          <h2 bg='warning'>{this.state.warning}</h2>
        </Alert>}
        <section>
          <Row>
            <Col className='firstCol'>
              <Form className='form' onSubmit={(e) => this.submitHandler(e)}>
                <Row >
                  <Col xs="auto" className="my-1">
                    <Form.Control size='lg' type="text" onChange={(e) => { this.getUserInputHandler(e) }} placeholder="search by City name" />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Button size='lg' type="submit">Explore!</Button>
                  </Col>
                </Row>
              </Form>
              {this.state.display && <Card>
                <City display={this.state.display} cityName={this.state.cityDescription} lat={this.state.lat} lon={this.state.lon} />
              </Card>}
              {this.state.display && <Card style={{ height: '300px' }} className='flex'>
                <Map display={this.state.display} lat={this.state.lat} lon={this.state.lon} />
              </Card>}
            </Col>
            <Col className='secondCol'>
              <div className='flex'>
                {
                  this.state.displyWeather &&
                  this.state.weatherData.map((Element, index) => (
                    <Weather key={index} description={Element.description}
                      date={Element.date} />
                  ))
                }
              </div>
            </Col>
          </Row>
        </section>

      </main >
    );
  }
}

export default Main;