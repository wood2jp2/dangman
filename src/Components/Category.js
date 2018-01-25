import React, { Component } from 'react';

class Category extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: ''
    }

    this.setCategory = this.setCategory.bind(this)
    this.continueButton = this.continueButton.bind(this)

  }

  setCategory = e => {
    e.preventDefault()
    this.setState({
      category: e.target.value
    })
  }

  continueButton = e => {
    e.preventDefault()
    // console.log(this.state.category)
    console.log(this.props.setCategory)
    this.props.setCategory(this.state.category)
  }

  render() {

    const categoryDropdown = <div>
      <select
        className='category'
        value={this.state.category}
        onChange={ e => {
          this.setCategory(e)
        }}>
        <option value='null'>First, choose a category for your puzzle!</option>
        <option value="TV">TV</option>
        <option value="Movies">Movies</option>
        <option value="Miscellanious">Miscellanious</option>
        <option value="Code">Code</option>
      </select>
    </div>

    return (
      <div>
        {categoryDropdown}

        <button
          name='continueButton'
          value={categoryDropdown}
          onClick={ e => {
            this.continueButton(e)
          }}
          >
          Continue to Puzzle
        </button>
      </div>
    )
  }



}

export default Category
