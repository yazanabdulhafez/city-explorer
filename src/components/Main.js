import React, { Component } from 'react'
import City from './City';
import axios from 'axios';
import Map from './Map';
import {Form} from 'react-bootstrap';

export class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      lat:"0.0",
      lon:"0.0",
      cityName:"",
      warning:"",
      display:false
    }
  }

  getUserInputHandler=(e)=>{
    this.setState({
      cityName:e.target.value
    })
    console.log(this.state.cityName);
  }

  submitHandler=(e)=>{
    e.preventDefault();
    console.log('res');
   let url=`https://eu1.locationiq.com/v1/search.php?key=pk.90e83a34a05295eeece1fac5b10f0d22&q=${this.state.cityName}&format=json`
    axios.get(url).then(res=>{
      let data= res.data[0]
     console.log(res);

      this.setState({
        cityName:data.display_name,
        lat:data.lat,
        lon:data.lon,
        display:true,
        warning:''
      })

    }).catch(err=>{
      console.log(err);
this.setState({
warning:`${err},please enter vaild city name`,
display:false
})
    });
  }
  render() {
        return (
          <main>
           
          <h2 bg='warning'>{this.state.warning}</h2>
          <section>
        <Form onSubmit={(e)=>this.submitHandler(e)}>
          <input type="text" onChange={(e)=>{this.getUserInputHandler(e)}} placeholder="Search by City name, Street, county..."/>
          <input type="submit" value="Explore!"/>
        </Form>
        <City display={this.state.display} cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon}/>
        <div>
   <Map display={this.state.display}cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon} />
    </div >
    </section>
    </main>
        );
    }
}

export default Main;