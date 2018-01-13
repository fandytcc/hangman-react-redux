import React, { PureComponent } from 'react'

class GuessDisplay extends PureComponent {

  render() {
    return (
      <div className="guess-display">
        <h3>{ this.props.guessedWord }</h3>
      </div>
    )
  }
}

export default GuessDisplay
