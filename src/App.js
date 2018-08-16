/* global chrome */

import React, { Component } from 'react';
import IP from './IP.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      rating: 'B',
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
    // axios.get(`http://${IP}/api/rating/${domain}`) 
    //   .then(results => {
    //     this.setState({
    //       rating: results.data,
    //     });
    //   }).catch(error => {
    //     console.log('Error in obtaining rating', error);
    //   });
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.domain}</h1>
        <p className="App-text">
          Rating: {this.state.rating}
        </p>
      </div>
    );
  }
}

export default App;
