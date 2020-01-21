import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ModuleRoutes from './Module/Module.routes'
import TaskStepsRoutes from './TaskSteps/TaskSteps.routes'

import './normalize.css'
import './styles.css'

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/tasks" component={TaskStepsRoutes} />
        <div className="container">
          <div className="viewport">
            <div className="overlay" />
            <ModuleRoutes />
          </div>
        </div>
      </Switch>
    </div>
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
