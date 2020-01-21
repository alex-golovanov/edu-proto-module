import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TaskSteps from './TaskSteps'
import ModuleRoutes from './Module.routes'

import './normalize.css'
import './styles.css'

const App = () => (
  <Router>
    <div className="app">
      <div className="container">
        <Switch>
          <Route exact path="/tasks" component={TaskSteps} />
          <div className="viewport">
            <div className="overlay" />
            <ModuleRoutes />
          </div>
        </Switch>
      </div>
    </div>
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
