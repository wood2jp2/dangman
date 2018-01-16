import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Puzzle from './Components/Puzzle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Puzzle />
      </div>
    );
  }
}

export default App;
