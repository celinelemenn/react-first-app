import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  handleInput = (event) => {
    return event.target.value;
  };

  render(props) {
    return (
      <input type="text" className="search" onChange={this.handleInput} />
    );
  }
}

export default Search;
