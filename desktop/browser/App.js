import React, {Component} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import Hangmenu from './containers/Hangmenu'

const App = () => (
  <div className="app">
    <main>
      <Route path="/hangman" component={Hangmenu} />
    </main>
  </div>
)

export default App