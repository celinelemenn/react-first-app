import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import List from './list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: 'XR9Dp54ZC4dji',
    };
    // this.search('Homer is thinking');
  }

  search(query) {
    giphy('euckIGM4NIeL1wFdgyAnDnY7xgDgH3ep').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div >
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="left-scene">
            <div className="selected-gif">
              <Gif id={this.state.selectedGif} />
            </div>
          </div>
        </div>
        <div className="right-scene">
          <List gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
