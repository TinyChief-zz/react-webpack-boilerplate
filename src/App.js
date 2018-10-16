import React, { Component } from 'react'
import './style.scss'
import Header from './components/Header'
import Calc from './components/Calc'
import Posts from './components/Posts'

class App extends Component {
  render () {
    return (
      <div id="container">
        <Header msg='Hello, World!' />
        <Calc></Calc>
        <Posts></Posts>
      </div>
    )
  }
}

export default App
