import React, { Component } from 'react';
//import Select from 'react-select';
//import logo from './logo.svg';
import './App.css';
import { NavLink,Link ,Route ,BrowserRouter } from 'react-router-dom'
require('dotenv').config()
require('dotenv').load()



class App extends Component {
 Home = (props) => (
        
  <div>
      <h2>{props.match.params.name}</h2>
  </div>
)   

   // console.log(process)
    url=process.env.REACT_APP_API_URL;
    
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
  
   return <BrowserRouter><div><ul>
{Object.keys(items).map(function(key, index){
    console.log(items[key])
    return <ul><NavLink to={`/home/${items[key].name}`}>{items[key].name}</NavLink></ul>;

  
})}

<Route exact path="/home/:name" component={this.Home}>
            </Route>



    </ul>

    </div>
    </BrowserRouter>
      
    

      
  
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
