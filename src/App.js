import React, { Component } from 'react';
import './App.css';
import TestNav from './header/containers/TestNav';
import NavbarCon from './header/containers/NavbarCon';


class App extends Component {
  render() {
    return (
      <div className="App">
  
        <NavbarCon />
      </div>
    );
  }
}

export default App;
