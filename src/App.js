import React, { Component } from 'react';
import Title from './components/Title'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="Hangman Game" />
        </header>

        <main>
        <p className="App-intro">

        </p>
        </main>
      </div>
    );
  }
}

export default App;
