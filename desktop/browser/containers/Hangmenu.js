import React from 'react'
import axios from 'axios'

import styles from '../styles/style.css'

import Hangman from './Hangman'

export default class Hangmenu extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = Object.assign({
      word: false
    })

    this.start = this.start.bind(this)
  }

  start(e) {
    axios.get('/word')
    .then(res => {
      this.setState({word: res.data})
    })
    .catch(err => console.error(err))
  }

  componentWillMount() {
    axios.get('/word')
    .then(res => {
      this.setState({word: res.data})
    })
    .catch(err => console.error(err))
  }


  render() {
    return (this.state.word) ? (<Hangman word={this.state.word} />) : (
      <p>Loading</p>
    )
  }
}