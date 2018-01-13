import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import images from '../fixture/images'

class HangmanDisplay extends PureComponent {
  static propTypes = {
    photo: PropTypes.string
  }

  render() {
    return (
      <div>
        <img src={ this.props.}
      </div>
    )
  }
}

export default HangmanDisplay
