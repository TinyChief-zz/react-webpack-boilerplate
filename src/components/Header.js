import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    msg: PropTypes.string
  }
  state = {
    message: this.props.msg
  }
  upperMessage = (msg) => {
    return msg.toUpperCase()
  }
  render () {
    const message = this.state.message
    return (
      <div>
        <h1>{this.upperMessage(message)}</h1>
      </div>
    )
  }
}
