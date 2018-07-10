import React from 'react'

import styles from '../styles/bingo.css'

import {newBoard} from '../boardGen'

export default class Bingo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bingo: false,
      board: newBoard()
    }
    this.registerClick = this.registerClick.bind(this)
  }

  registerClick(e) {
    let bored = this.state.board.map((space, index) => {
      if (index == e.target.id) return {phrase: space.phrase, clicked: !space.clicked}
      else return space
    })
    this.setState({board: bored})
  }

  render() {
    console.log(this.state)
    return(
      <div className={styles.board}>
        {this.state.board.map((space, index) => (
          <div id={index} key={index} onClick={this.registerClick} className={(space.clicked) ? styles.fill : ''}><div id={index}>{space.phrase}</div></div>
        ))}
      </div>
    )
  }
}