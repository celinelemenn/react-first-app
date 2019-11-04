import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Search from './search';
import Gif from './gif';
import List from './list';

class App extends Component {
  constructor(props) {
    super(props);
    // const array = [
    //   { id: 'l0NwOkgTYRi30mT4Y' },
    //   { id: '7JbMfrLQJmxUc' },
    //   { id: '2GVVvT5ATZtUQ' },
    // ];
    this.state = {
      gifs: [],
      selectedGif: 'XR9Dp54ZC4dji',
    };
  }

  render() {
    return (
      <div className="app-container">
        <div className="left">
          <Search />
          <div className="gif-container">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right">
          <List gifs={this.state.gifs} />
           degugger
        </div>
      </div>
    );
  }
}

export default App;
