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
      guessesLeft: 3,
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

  reviseStateOfPuzzle = letter => {

     let newlyGuessedPuzzle = this.state.stateOfPuzzle

     if (this.state.currentPuzzle.includes(letter)) {

       this.state.currentPuzzle.forEach( (x, i) => {
         if (x === letter) {
           newlyGuessedPuzzle[i] = letter
         }
       })

       this.setState({
         correctGuesses: this.state.correctGuesses.concat([letter]),
         stateOfPuzzle: newlyGuessedPuzzle
       })

       if (this.state.currentPuzzle.join() === this.state.stateOfPuzzle.join()) {
         let addWin = this.state.wins+1
         this.setState({
           gameInProgress: false,
           wins: addWin
         })
       }

     } else {

       let loseGuess = this.state.guessesLeft-1

       this.setState({
         guessesLeft: loseGuess
       })

       if (loseGuess === 0) {
         let addLoss = this.state.losses+1
         alert('You Lose!')
         this.setState({
           gameInProgress: false,
           losses: addLoss
         })
       }
     }
   }


  render() {
    let startButton = null
    let puzzle = null
    let guessBox = null

    if (!this.state.gameInProgress) {
      startButton = <button name='newGameButton' onClick={ e => this.initiateGame(e)}>Start a new game!</button>
    } else {
      puzzle = this.state.stateOfPuzzle.map( (x,i) => <PuzzleLetter character={x} key={i}/>)
      guessBox = <GuessBox puzzle={this.state.currentPuzzle} checkSubmission={this.reviseStateOfPuzzle}/>
    }

    return (
      <div>
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
