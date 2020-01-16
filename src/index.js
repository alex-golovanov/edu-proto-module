import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Module from './Module'
import TaskText from './TaskText'
import TaskVideo from './TaskVideo'

import './normalize.css'
import './styles.css'

const App = () => (
  <Router>
    <div className="app">
      <div className="container">
        <div className="overlay" />
        <div className="viewport">
          <Switch>
            <Route exact path="/module" component={Module} />
            <Route path="/module/task/video" component={TaskVideo} />
            <Route path="/module/task/text" component={TaskText} />
            <Redirect to="/module" />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
