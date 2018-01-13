import React, { PureComponent } from 'react'
import images from '../fixtures/images'
import Hangman0 from '../images/hangman0.png'

class HangmanDisplay extends PureComponent {

  render() {
    return (
      <div className="hangman-image">
        <img src= { Hangman0 } alt="hangman images"/>
      </div>
    )
  }
}

export default HangmanDisplay
