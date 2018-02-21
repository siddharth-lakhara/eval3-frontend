import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sidebar/sidebar';
import RightPane from './components/rightPane';

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <SideBar />
        <RightPane />
      </div>
    );
  }
}

export default App;
