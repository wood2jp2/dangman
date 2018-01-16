import React, { Component } from 'react'

class Puzzle extends Component {

  constructor() {
    super()
    this.state = {
      puzzles: ['Goldfish'],
      currentPuzzle: '',
      incorrectGuesses: [],
      correctGuesses: [],
      guessesLeft: 10,
      wins: 0,
      losses: 0,
    }
  }

  render() {
    return (
      <div>
        This will be your puzzle
      </div>
    )
  }

}

export default Puzzle
