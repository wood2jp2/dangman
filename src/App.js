import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Puzzle from './Components/Puzzle';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Redirect from='/' to='/puzzle' />
          <Route exact path='/puzzle' component={ Puzzle } />
        </div>
      </Router>
    );
  }
}

export default App;
