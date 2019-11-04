import React, { Component } from 'react';

class Search extends Component {
  handleInput = (event) => {
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-search"
        onChange={this.handleInput}
      />
    );
  }
}

export default Search;
