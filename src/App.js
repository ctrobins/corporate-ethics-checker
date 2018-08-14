/* global chrome */


import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
    }
  }

  componentDidMount(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      this.setState({
        domain: domain,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.domain}</h1>
        <p className="App-intro">
          Rating: B
        </p>
      </div>
    );
  }
}

export default App;
