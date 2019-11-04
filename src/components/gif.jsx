import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    // console.log(this.props.id);
    this.props.setSelectedGif(this.props.id);
  }

  render() {
    const { id, setSelectedGif } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
