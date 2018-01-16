import React, { Component } from 'react'

class Puzzle extends Component {

  checkState = e => {
    e.preventDefault()
    console.log(this.state)
  }

  constructor() {
    super()
    this.state = {
      puzzles: ['Goldfish', 'Hello'],
      currentPuzzle: '',
      incorrectGuesses: [],
      correctGuesses: [],
      guessesLeft: 10,
      wins: 0,
      losses: 0,
      gameInProgress: false
    }
  }

  initiateGame = e => {
    e.preventDefault()
    let randomPuzzle = this.state.puzzles[Math.floor(Math.random()*this.state.puzzles.length)].split('')
    this.setState({
      gameInProgress: true,
      currentPuzzle: randomPuzzle
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        This will be your puzzle
        { this.state.gameInProgress ? (
          this.state.currentPuzzle.map( x => <p>_</p>)
        ) : (
          <button
            name='newGameButton'
            onClick={ e => this.initiateGame(e)}>Start a new game!</button>
        )}
        <button
          name='checkState'
          onClick={ e => this.checkState(e)}>Check State</button>
      </div>
    )
  }

}

export default Puzzle
