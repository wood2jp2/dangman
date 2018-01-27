import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Puzzle from './Components/Puzzle';
import Category from './Components/Category';

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

  puzzleComponent = props => {
    return (
      <Puzzle category={this.state.category} />
    )
  }

  render() {

    return (
      <div className='App'>
        <Category setCategory={this.setCategory}/>
      </div>
    );
  }
}

export default App;
