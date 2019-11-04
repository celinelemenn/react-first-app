import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Gif extends Component {
  render(props) {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
        return(
      <img src={src} alt=""/>
    );
  }
}

export default Gif;
