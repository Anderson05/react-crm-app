// import logo from './logo.svg';
import './App.css';
import data from '../data.json';
import React, { Component } from 'react';
import Grid from './Grid';


class App extends Component{
  constructor(props){
    super(props);
    this.state = { data }
  }

  render(){
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className='nav-wrapper'>
              <a href='/' className='brand-logo center'>Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Grid items={this.state.data} />
        </div>
      </div>
    );
  }
}


export default App;
