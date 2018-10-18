import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
require('dotenv').config()
require('dotenv').load()
const rendertree = items => {
    
  return <ul>

    { items.childreins.map(i => {
        console.log(i)
      return <li>
        { i.data.task }
        { i.childreins && rendertree(i) }
      </li>
      
    })}
  </ul>
}


class App extends Component {
   // console.log(process)
    url=process.env.REACT_APP_API_URL;
     
    
   state = {
       message:''
    };
   componentDidMount() {
        
        setTimeout(this.updatewiew)
    }

    updatewiew = () => {
         console.log(this.url+'/index/greetings');
       //console.log(deployment.env)
        fetch(this.url+'/index/greetings')
            .then(response => response.json())
            .then(message => {
               
                
            
                this.setState({message: message});
            });
   
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
          {(this.state.message.data === undefined)
          ? <div> Something went wrong </div> 
          :  <ul>
          <li>
        { this.state.message.data.task }
      </li>
          {rendertree(this.state.message)} 
          </ul> 
          }
                </p>        
     
        </header>
      </div>
    );
  }
}

export default App;
