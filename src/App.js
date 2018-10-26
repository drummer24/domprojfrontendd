import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
require('dotenv').config()
require('dotenv').load()



class App extends Component {
   // console.log(process)
    url=process.env.REACT_APP_API_URL;
    s
   indexes=[]
 
rendertree = items => {
    
  return <ul>

    { items.childreins.map(i => {
        console.log(i)
      return <li>
        { i.data.task }
        { i.childreins && this.rendertree(i) }
      </li> 
      })}
  </ul>
  

} 
 rendermenu = items => {
   return <ul>
{Object.keys(items).map(function(key, index){
  return  <li>
  {items[key].name}
   </li>
   
})}
 </ul> 
      
    

      
  
}
 
 
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
          
          {(this.state.message === undefined)
          ? <div> server not responding </div> 
          :  
          this.rendermenu(this.state.message) 
           
          }
                        
     
        </header>
      </div>
    );
  }
}

export default App;
