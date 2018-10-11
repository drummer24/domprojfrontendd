import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
require('dotenv').config()
require('dotenv').load()
class App extends Component {

   state = {
    
  };
   componentDidMount() {
        
        setInterval(this.updatewiew, 1000);
    }

    updatewiew = () => {
       //console.log(deployment.env)
        fetch('process.env./index/greetings')
            .then(response => response)
            .then(message => {
                
                this.setState({message: message});
            });
    console.log(process.env)
    console.log(this.state);
    };
  
   render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
        
        the response is {this.state.message}
        </p>
        </header>
      </div>
    );
  }
}

export default App;
