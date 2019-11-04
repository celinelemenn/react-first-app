import React from 'react';

import Gif from './gif';

const List = ({ gifs, setSelectedGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.key} setSelectedGif={setSelectedGif} />)}
    </div>
  );
};


export default List;
