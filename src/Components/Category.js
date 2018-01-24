import React, { Component } from 'react';

class Category extends Component {

  constructor() {
    super()
    this.state = {
      category: ''
    }
  }

  setCategory = e => {
    e.preventDefault()
    this.setState({
      category: e.target.value
    })
    console.log(this.state.category)
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
            this.setCategory(e)
          }}>
          Continue to Puzzle
        </button>
      </div>
    )
  }

}

export default Category
