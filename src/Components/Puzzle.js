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
      stateOfPuzzle: '',
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
    let stateOfPuzzle = randomPuzzle.map( x => '_')
    this.setState({
      gameInProgress: true,
      currentPuzzle: randomPuzzle,
      stateOfPuzzle: stateOfPuzzle
    })

  }

  render() {
    let startButton = null
    let puzzle = null
    let guessBox = null
    if (!this.state.gameInProgress) {
      startButton = <button name='newGameButton' onClick={ e => this.initiateGame(e)}>Start a new game!</button>
    } else {
      puzzle = this.state.stateOfPuzzle.map( (x,i) => <PuzzleLetter data-letter={this.state.currentPuzzle[i]} props={this.state} key={i}/>)
      guessBox = <GuessBox puzzle={this.state.currentPuzzle} checkSubmission={letter => {
        if (this.state.currentPuzzle.includes(letter)) {
          let newlyGuessedPuzzle = []
          this.state.currentPuzzle.forEach( x => {
            if (x === letter) {
              newlyGuessedPuzzle.push(letter)
            } else {
              newlyGuessedPuzzle.push('_')
            }
          })
          this.setState({
            correctGuesses: this.state.correctGuesses.concat([letter]),
            stateOfPuzzle: newlyGuessedPuzzle
          })
          console.log(this.state.stateOfPuzzle)
        } else {
          this.setState({
            guessesLeft: this.state.guessesLeft--
          })
        }
      }} />
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
