import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gif from './gif';

class List extends Component {
  render(props) {
    return(
      <div className='gif-list'>
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.key} />)}
      </div>
  )}
}


export default List;
