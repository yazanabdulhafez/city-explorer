import React, { Component } from 'react';
import City from './City';
import axios from 'axios';
import Map from './Map';
import Movies from './Movies';
import CityForm from './CityForm';
import { Container, ListGroup, Alert, Card, Row, Col } from 'react-bootstrap';
import Weather from './Weather';

require( 'dotenv' ).config();
const key = process.env.REACT_APP_ACCESS_TOKEN;


export class Main extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      lat: '0.0',
      lon: '0.0',
      cityName: '',
      cityDescription: '',
      warning: '',
      warningDisplay: false,
      display: false,
      displyWeather: false,
      weatherData: [],
      moviesData: [],
      displayMovies: false
    };
  }

  getUserInputHandler = ( e ) => {
    this.setState( {
      cityName: e.target.value
    } );
    console.log( this.state.cityName );
  }

  submitHandler = ( e ) => {
    e.preventDefault();
    let url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${this.state.cityName}&format=json`;
    axios.get( url ).then( res => {
      let data = res.data[0];
      console.log( res.data[0] );


      this.setState( {
        cityDescription: data.display_name,
        lat: data.lat,
        lon: data.lon,
        display: true,
        warning: '',
        warningDisplay: false

      } );
      let mapUrl = `https://city-explorer-apiapp.herokuapp.com/weather?${process.env.REACT_APP_WEATHER_API_KEY}&lat=${this.state.lat}&lon=${this.state.lon}`;
      axios.get( mapUrl ).then( res => {
        this.setState( {
          displyWeather: true,
          weatherData: res.data,
          warningDisplay: false
        } );
      } );
      let movieUrl = `https://city-explorer-apiapp.herokuapp.com/movies?api_key=1dcf83331301e64bda3cf78fd359f8ce&city=${this.state.cityName}`;
      axios.get( movieUrl ).then( res => {
        console.log( res );
        this.setState( {
          displayMovies: true,
          moviesData: res.data,
          warningDisplay: false
        } );
      } );
    } ).catch( err => {
      console.log( err );
      this.setState( {
        warning: `${err.massage},please enter vaild city name`,
        display: false,
        displyWeather: false,
        displayMovies: false,
        warningDisplay: true
      } );
    } );

  }
  render() {
    return (
      <main>
        {this.state.warningDisplay && <Alert style={{ width: '80rem', margin: 'auto' }} variant='danger'>
          <h2 bg='warning'>{this.state.warning}</h2>
        </Alert>}

        <Container>
          <Row >
            <Col className='firstCol'>
              <CityForm getUserInputHandler={this.getUserInputHandler} submitHandler={this.submitHandler} />
              {this.state.display && <Card>
                <City display={this.state.display} cityName={this.state.cityDescription} lat={this.state.lat} lon={this.state.lon} />
              </Card>}
              {this.state.display && <Card style={{ height: '450px' }} className='flex'>
                <Map display={this.state.display} lat={this.state.lat} lon={this.state.lon} />
              </Card>}
            </Col>


            <Col className='secondCol'>

              {
                this.state.displyWeather && <div>

                  <ListGroup style={{ width: '80%', margin: 'Auto', textAlign: 'center' }}>
                    <h5 style={{ textAlign: 'center' }}> WEATHER DETAILS</h5>
                    <Weather weatherData={this.state.weatherData} />
                  </ListGroup>
                </div>
              }

            </Col>
          </Row>
        </Container>
        <Row style={{ paddingTop: '100px', justifyContent: 'center', paddingBottom: '60px' }}>

          {
            this.state.displayMovies &&
            this.state.moviesData.data.map( ( Element, index ) => (
              <Movies key={index}
                element={Element}
              />
            ) )
          }
        </Row>



      </main >
    );
  }
}

export default Main;
