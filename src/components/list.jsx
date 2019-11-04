import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gif from './gif';

class List extends Component {
  render(props) {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.key} />);
  }
}


export default List;
