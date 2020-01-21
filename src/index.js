import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ModuleRoutes from './Module.routes'
import TaskStepsRoutes from './TaskSteps.routes'

import './normalize.css'
import './styles.css'

const App = () => (
  <Router>
    <div className="app">
      <div className="container">
        <Switch>
          <Route path="/tasks" component={TaskStepsRoutes} />
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
