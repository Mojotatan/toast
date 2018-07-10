import React from 'react'

import styles from '../styles/biggify.css'

export default class Biggify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      biggify: false,
      phrase: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleBiggify = this.toggleBiggify.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({biggify: true})
  }

  toggleBiggify() {
    this.setState({phrase: '', biggify: false})
  }

  render() {
    return(
      <div className={styles.containment}>
        {(this.state.biggify) ?
        <div className={styles.phraseContainer} onClick={this.toggleBiggify}>
          <div className={styles.biggiphrase}>{this.state.phrase}</div>
        </div>
        :
        <form className={styles.biggiform} onSubmit={this.handleSubmit}>
          <input placeholder="put 'er there" name="phrase"
          value={this.state.phrase} onChange={this.handleChange} />
          <button>Biggify Me!</button>
        </form>
        }
      </div>
    )
  }
}