import React, { PureComponent } from 'react'

class UserInput extends PureComponent {
  constructor(props) {
    super()
    this.state = { value: '' }
  }

  onChange(event) {
    this.setState({
      value: event.target.value.toLowerCase()
    })
  }

  onGuess(event) {
      event.preventDefault()
      // this.props.onGuess(this.state.value)
      // this.setState({
      //   value: ''
      // })
  }

  render() {
    return (
        <form onSubmit={ this.onGuess.bind(this) } >
          <label>
            Enter your guess:
            <input
              type="text"
              value={ this.state.value }
              onChange={ this.onChange.bind(this) } />
          </label>
          <input type="submit" value="Guess" />
        </form>
    )
  }
}

export default UserInput
