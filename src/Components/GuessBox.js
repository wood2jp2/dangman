import React, { Component } from 'react'

class GuessBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPuzzle: props.puzzle,
      currentGuess: '',
      submittedGuesses: []
    }

    this.onChange = this.onChange.bind(this)
    this.submitGuess = this.submitGuess.bind(this)
  }

  onChange = e => {
    this.setState({
      currentGuess: e.target.value.toUpperCase()
    })
  }

  submitGuess = e => {
    e.preventDefault()

    !this.state.submittedGuesses.includes(this.state.currentGuess) ? (
      this.setState({
        submittedGuesses: this.state.submittedGuesses.concat([this.state.currentGuess])
      })
    ) : (alert(`You've already guessed ${this.state.currentGuess}!`))

    console.log(this.state.submittedGuesses)
  }

  render() {
    return (
      <div>
      <form
        onSubmit={this.submitGuess}>
        <label>
          Guess:
        <input
          type="text"
          name="name"
          maxLength='1'
          value={this.state.currentGuess}
          onChange={this.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>Submitted Guesses: {this.state.submittedGuesses.map( x => {
        return <div key={x}><p>{x}</p></div>
      })}</div>
      </div>
    )
  }

}

export default GuessBox
