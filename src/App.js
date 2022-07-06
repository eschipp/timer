import React, { Component } from 'react';
import Goals from './components/Goals/Goals.js';
import Table from './components/Table/Table';
import Time from './components/Time/Time';
import './App.css';

class 
  App extends Component {
    constructor() {
      super()
      // this.state = initialState;
      }


    
    render() {
      // const { } = this.state;
      return ( 
        <div>
          <Goals />
          <Time />
          <Table />
          
        </div>
        );
      }
  }

export default App;
