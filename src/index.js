import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Module from './Module'
import Reflection from './Reflection'
import ModuleElementLevelTwo from './ModuleElement/ModuleElementLevelTwo'
import ModuleElement from './ModuleElement'
import ModuleOverview from './ModuleOverview'
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
            <Route path="/module/overview" component={ModuleOverview} />
            <Route path="/module/task/video" component={TaskVideo} />
            <Route path="/module/task/text" component={TaskText} />
            <Route exact path="/module/element/two" component={ModuleElementLevelTwo} />
            <Route path="/module/element/:level?" component={ModuleElement} />
            <Route path="/module/reflection" component={Reflection} />
            <Redirect to="/module" />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
