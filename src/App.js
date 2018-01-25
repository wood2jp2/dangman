import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Puzzle from './Components/Puzzle';
import Category from './Components/Category';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class App extends Component {
  constructor() {
    super()
    this.state = {
      category: ''
    }
  }

  setCategory = selection => {
    this.setState({
      category: selection
    })
    console.log(this.state)
  }

  categoryComponent = props => {
    return (
      <Category setCategory={this.setCategory} />
    )
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/category' component={ this.categoryComponent }/>
          <Route exact path='/puzzle' component={ Puzzle } />
        </div>
      </Router>
    );
  }
}

export default App;
