import React from 'react'


import {Grid} from '../gridGen'
import styles from '../styles/connect4.css'

import io from 'socket.io-client'
let socket = io.connect()
let me = {color: 'spectator'}
socket.on('player assignment', color => {
  console.log(color)
  me.color = color
})
let turn = 'red'
// socket.on('move', data => {
//   console.log('move!')
//   turn = (turn === 'red') ? 'black' : 'red'
// })
socket.on('chat', message => {
  console.log(message)
})


export default class Connect4 extends React.Component {
  constructor(props) {

    super(props)
    // console.log(props)
    this.state = {
      board: new Grid(7, 6),
      chat: ''
    }

    this.handleMove = this.handleMove.bind(this)
    this.simulateMove = this.simulateMove.bind(this)

    this.sendMessage = this.sendMessage.bind(this)
    this.typeInChat = this.typeInChat.bind(this)

    socket.on('move', x => {
      // console.log('move!')
      turn = (turn === 'red') ? 'black' : 'red'
      this.simulateMove(x)
    })
  }

  simulateMove(x) {
    let newState = Object.assign({}, this.state.board)
    newState.getFloor(x).color = (me.color === 'red') ? 'black' : 'red'
    this.setState({
      board: newState
    })
  }

  handleMove(e) {
    if (turn === me.color) {
      let newState = Object.assign({}, this.state.board)
      if (newState.getFloor(Number(e.target.id))) {
        newState.getFloor(Number(e.target.id)).color = me.color
        this.setState({
          board: newState
        })
        socket.emit('move', Number(e.target.id))
        turn = (turn === 'red') ? 'black' : 'red'
      }
    }
  }

  sendMessage(e) {
    e.preventDefault()
    socket.emit('chat', `${me.color}: ${this.state.chat}`)
    this.setState({chat: ''})
  }

  typeInChat(e) {
    this.setState({chat: e.target.value})
  }

  componentWillUpdate(e) {
    let win = this.state.board.victoryCheck()
    if (win) console.log(`${win} wins`)
  }

  render() {
    return (
      <div>
        <div className={styles.header}></div>
        <div className={styles.board}>
          {this.state.board.getColumns().map((col, index) => (
            <div id={`${index}`} key={index} className={styles.floatCol} onClick={this.handleMove}>
              {col.map(slot => (
                <div id={`${index}`} key={`${slot.x}-${slot.y}`} className={styles.slot}>
                  <div id={`${index}`} className={styles[slot.color]}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={this.sendMessage}>
          <input
            className={styles.chat}
            value={this.state.chat}
            onChange={this.typeInChat}
            placeholder="chat"
          />
        </form>
      </div>
    )
  }
}