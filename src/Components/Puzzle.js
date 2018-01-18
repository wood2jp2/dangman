import React, { Component } from 'react'
import PuzzleLetter from './PuzzleLetter'
import GuessBox from './GuessBox'

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
    let randomPuzzle = this.state.puzzles[Math.floor(Math.random()*this.state.puzzles.length)].split('').map( x=>x.toUpperCase())
    this.setState({
      gameInProgress: true,
      currentPuzzle: randomPuzzle
    })
  }

  render() {
    let startButton = null
    let puzzle = null
    let guessBox = null
    if (!this.state.gameInProgress) {
      startButton = <button name='newGameButton' onClick={ e => this.initiateGame(e)}>Start a new game!</button>
    } else {
      puzzle = this.state.currentPuzzle.map( (x,i) => <PuzzleLetter props={this.state} key={i}/>)
      guessBox = <GuessBox puzzle={this.state.currentPuzzle}/>
    }
    return (
      <div>
        This will be your puzzle
        {startButton}
        {puzzle}
        {guessBox}
        <button
          name='checkState'
          onClick={ e => this.checkState(e)}>Check State</button>
      </div>
    )
  }

}

export default Puzzle
