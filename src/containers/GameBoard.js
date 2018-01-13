import React, { PureComponent } from 'react'
import UserInput from '../components/UserInput'

class GameBoard extends PureComponent {
  // renderRecipe(recipe, index) {
  //   return null // this will come later
  // }

  render() {
    return(
      <div className="game wrapper">
        <UserInput />
          // { this.props.recipes.map(this.renderRecipe) }
      </div>
    )
  }
}

export default GameBoard
