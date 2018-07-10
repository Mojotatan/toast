import React, {Component} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import Hangmenu from './containers/Hangmenu'
import Connect4 from './containers/Connect4'
import Bingo from './containers/Bingo'
import Biggify from './containers/Biggify'

const App = () => (
  <div className="app">
    <main>
      <Route path="/hangman" component={Hangmenu} />
      <Route path="/connect4" component={Connect4} />
      <Route path="/biggify" component={Biggify} />
      {/* <Route path="/bingo" component={Bingo} /> */}
    </main>
  </div>
)

export default App