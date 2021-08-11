import React, { Component } from 'react'
import City from './City';
import axios from 'axios';
import Map from './Map';
import Movies from './Movies';
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
      weatherData: [],
      moviesData:[],
      displayMovies:false
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
      let mapUrl='http://localhost:8000/weather?key=81800f30dd4e4fc4801159eab53edc25&lat=31.95522&lon= 35.94503';
       axios.get(mapUrl).then(res => {
            this.setState({
              displyWeather: true,
              weatherData: res.data,
              warningDisplay: false
            });
          });
          let movieUrl='http://localhost:8000/movies?api_key=1dcf83331301e64bda3cf78fd359f8ce&city=amman';
          axios.get(movieUrl).then(res => {
            console.log(res);
               this.setState({
                 displyMovies: true,
                 moviesData: res.data,
                 warningDisplay: false
               });
             });
    }).catch(err => {
      console.log(err);
      this.setState({
        warning: `${err.massage},please enter vaild city name`,
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
          <Row>
          <Col className='secondCol'>
              <div className='flex'>
                {
                  this.state.displyMovies &&
                  this.state.moviesData.map((Element, index) => (
                    <Movies key={index}  
                    title={Element.title} 
                    overview = {Element.overview}
                    average_vote ={Element.average_vote}
                    total_votes = {Element.total_votes}
                    image_url = {Element.image_url}
                    popularity = {Element.popularity}
                    released_on ={Element.released_on}
                    />
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