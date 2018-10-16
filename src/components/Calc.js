import React, { Component } from 'react'
import { connect } from 'react-redux'

class Calc extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.guests}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.dicrement}>Dicrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    guests: state.guests
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT' })
    },
    dicrement: () => {
      dispatch({ type: 'DICREMENT' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc)
