import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  handleInput = (event) => {
    this.props.searchFunction(event.target.value);
  };

  render(props) {
    return (
      <input type="text" className="form-search" onChange={this.handleInput} />
    );
  }
}

export default Search;
