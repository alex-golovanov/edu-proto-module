import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Module from '../Module'
import ModuleOverview from '../ModuleOverview'
import TaskVideo from '../TaskVideo'
import TaskText from '../TaskText'
import ModuleElementLevelTwo from '../ModuleElement/ModuleElementLevelTwo'
import ModuleElement from '../ModuleElement'
import Reflection from '../Reflection'

export default function ModuleRoutes() {
  return (
    <Switch>
      <Route exact path="/module" component={Module} />
      <Route path="/module/overview" component={ModuleOverview} />
      <Route path="/module/task/video" component={TaskVideo} />
      <Route path="/module/task/text" component={TaskText} />
      <Route exact path="/module/element/two" component={ModuleElementLevelTwo} />
      <Route exact path="/module/element/two-done" component={ModuleElementLevelTwo} />
      <Route path="/module/element/:level?" component={ModuleElement} />
      <Route path="/module/reflection" component={Reflection} />
      <Redirect to="/module" />
    </Switch>
  )
}
