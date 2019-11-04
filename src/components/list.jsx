import React from 'react';

import Gif from './gif';

const List = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.key} />)}
    </div>
  );
};


export default List;
