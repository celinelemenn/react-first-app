import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Search from './search';
import Gif from './gif';
import List from './list';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <div className="left">
          <Search side="left" />
          <Gif />
        </div>
        <div className="right">
           <List />
        </div>
      </div>
    );
  }

}

export default App;
