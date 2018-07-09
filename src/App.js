import React, { Component } from 'react';
import Signin from './Components/Signin'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ideaz</h1>
        </header>
        <Signin />
      </div>
    );
  }
}

export default App;
