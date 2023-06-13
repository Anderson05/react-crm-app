// import logo from './logo.svg';
import './App.css';
import data from '../data.json';
import React, { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state = { data }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with CRM App
          </a>
        </header>
      </div>
    );
  }
}


export default App;
