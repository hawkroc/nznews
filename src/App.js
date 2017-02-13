import React, { Component } from 'react';
import './App.css';
import TestNav from './header/containers/TestNav';
import Header from './header/components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
