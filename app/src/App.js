import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          Have fun learning JS and React.
        </p>
      </div>
    );
  }
}

export default App;
