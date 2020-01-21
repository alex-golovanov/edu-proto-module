import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles.scss'
import TaskSteps from '../TaskSteps'

export default function TaskStepsRoutes() {
  return (
    <div className="overlay-tasks">
      <Switch>
        <Route path="/tasks/:step/:stage?" component={TaskSteps} />
      </Switch>
    </div>
  )
}
