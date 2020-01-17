import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Module from './Module'
import ModuleOverview from './ModuleOverview'
import TaskText from './TaskText'
import TaskVideo from './TaskVideo'
import ModuleElement from './ModuleElement'

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
            <Route path="/module/overview" component={ModuleOverview} />
            <Route path="/module/task/video" component={TaskVideo} />
            <Route path="/module/task/text" component={TaskText} />
            <Route path={"/module/module-element"} component={ModuleElement} />
            <Redirect to="/module" />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
