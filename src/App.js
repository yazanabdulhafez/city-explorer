import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// dotenv.config();
 let tokenKey=`${process.env.MY_Access_Token}`
  console.log(tokenKey);
 
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