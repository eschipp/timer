import React, { Component } from 'react';
import Goals from './components/Goals/Goals';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Table from './components/Table/Table';
import Time from './components/Time/Time';
import './App.css';

class App extends Component {
    // constructor() {
    //   super()
    //   // this.state = initialState;
    //   }



    render() {
      // const { } = this.state;
      return ( 
        <div>
          <Navigation />
          <Logo />
          <Goals />
          <Time />
          <Table />
        </div>
        );
      }
  }

export default App;
