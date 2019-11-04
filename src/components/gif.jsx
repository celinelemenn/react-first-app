import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (props) => {
    // console.log(this.props.id);
    this.props.setSelectedGif(this.props.id);
  }

  render(props) {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
