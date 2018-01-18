import React, { Component } from 'react'

class GuessBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      all: props,
      currentGuess: '',
      submittedGuesses: []
    }
  }

  onChange = e => {
    this.setState({
      currentGuess: e.target.value.toUpperCase()
    })
    console.log(this.state.currentGuess)
  }

  submitGuess = e => {
    e.preventDefault()
    this.state.submittedGuesses.push[3]
    console.log(this.state.submittedGuesses)
  }

  render() {
    return (
      <form
        value={this.state.currentGuess}
        onSubmit={e => {
          this.submitGuess(e)
        }}>
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
    )
  }

}

export default GuessBox
