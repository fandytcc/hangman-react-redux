import React, { Component } from 'react';
import GameBoard from './containers/GameBoard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Hangman Game </h1>
        </header>

        <main>
        <div className="hangman">
          <GameBoard />
        </div>
        </main>
      </div>
    );
  }
}

export default App;
