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
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs) => {
      let url = tabs[0].url;
      let title = tabs[0].title;
      let full = new URL(url);
      let host = full.hostname;
      console.log('URL', url);
      console.log('HOST', host);
      console.log('TITLE', title);
      this.setState({
        domain: host,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Corporate Ethics Checker</h1>
        </header>
        <p className="App-intro">
          Domain: {this.state.domain}
        </p>
      </div>
    );
  }
}

export default App;
