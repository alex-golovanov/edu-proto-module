import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles.css'
import TaskSteps from './TaskSteps'

export default function TaskStepsRoutes() {
  return (
    <div className="overlay-tasks">
      <Switch>
        <Route path="/tasks/:step?" component={TaskSteps} />
      </Switch>
    </div>
  )
}
