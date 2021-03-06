import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import List from './list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: '',
    };
    // this.search('Homer is thinking');
  }

  search = (query) => {
    giphy('euckIGM4NIeL1wFdgyAnDnY7xgDgH3ep')
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

  setSelectedGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <List gifs={this.state.gifs} setSelectedGif={this.setSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
