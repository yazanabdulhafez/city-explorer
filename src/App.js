import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {

  render() {
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
