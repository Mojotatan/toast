import React from 'react'
import axios from 'axios'

import styles from '../styles/style.css'

export default class Hangman extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = Object.assign({
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      guesses: [],
      word: props.word.split(''),
      gg: false
    })

    this.guessLetter = this.guessLetter.bind(this)
  }

  guessLetter(e) {
    if (!this.state.gg) {
      let alphabet = this.state.alphabet.join('').replace(e.target.id, '').split('')
      this.setState({
        alphabet,
        guesses: [...this.state.guesses, e.target.id]
      })
    }
  }

  componentDidUpdate() {
    if (!this.state.gg) {
      if (this.state.word.filter(letter => (!this.state.guesses.includes(letter))).length === 0) {
        this.setState({gg: 'You win sweg'})
      } else if (this.state.guesses.filter(letter => (!this.state.word.includes(letter))).length >= 8) {
        this.setState({gg: 'You lose rip'})
      }
    }
  }

  render() {
    return (
      <div className={styles.boody}>
        <h2>Hang em High</h2>
        <div className={styles.gallows}>
          {this.state.guesses.filter(letter => (!this.state.word.includes(letter))).map((guess, index) => (
            <div key={`guess-${guess}`} className={styles[`shape-${index}`]}></div>
          ))}
        </div>
        <div className={styles.word}>
          {this.state.word.map((letter, index) => (
            <span key={`word-${index}`}>
              {(this.state.guesses.includes(letter) || this.state.gg) ? letter : '_'}
            </span>
          ))}
        </div>
        <div className={styles.alphabet}>
          {this.state.alphabet.map(letter => (
            <span key={`alphabet-${letter}`} id={letter} onClick={this.guessLetter}>{letter}</span>
          ))}
        </div>
        <div className={styles.guesses}>{`Guesses: ${this.state.guesses.filter(letter => (!this.state.word.includes(letter))).join(' ')}`}</div>
        {(this.state.gg) ? <h3>{this.state.gg}</h3> : null}
      </div>
    )
  }
}