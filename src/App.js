import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


 
export class App extends Component {
  
  render() {
    return (
     <>
        <Header />
       <Main />
    <Footer />
  </>
    )
  }
}

export default App