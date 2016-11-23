import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    console.log('constructing searchbar')
    this.state = { term: '' }
  }

  render() {
    console.log('rendering SearchBar..')
    return (
      <div>
        <input onChange={ (event) => this.setState({ term: event.target.value }) } />
      </div>
    )
  }

}

export default SearchBar;
