import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sidebar/sidebar';
import RightPane from './components/rightPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sync: 0,
    };
  }

  componentDidMount() {
    this.setState({
      sync: 1,
    });
  }

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
