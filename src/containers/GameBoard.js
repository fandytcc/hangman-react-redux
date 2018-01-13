import React, { PureComponent } from 'react'
import UserInput from '../components/UserInput'
import HangmanDisplay from '../components/HangmanDisplay'

class GameBoard extends PureComponent {
  // renderRecipe(recipe, index) {
  //   return null // this will come later
  // }

  render() {
    return(
      <main>
        <div className="game-wrapper">
          <UserInput />
          <GuessDisplay />
          <HangmanDisplay />
        </div>
      </main>
    )
  }
}

export default GameBoard
