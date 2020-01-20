import React, { memo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../shared/Header'
import StageOne from './StageOne'
import StageTwo from './StageTwo'
import StageThree from './StageThree'
import StageFinal from './StageFinal'

import './styles.scss'

export default memo(function Reflection() {
  return (
    <>
      <Header showSkipButton />
      <span className="reflection__main-heading">Эпоха Возрождения • 3.0</span>
      <Switch>
        <Route path="/module/reflection/1" component={StageOne} />
        <Route path="/module/reflection/2" component={StageTwo} />
        <Route path="/module/reflection/3/:result" component={StageThree} />
        <Route path="/module/reflection/final/:result" component={StageFinal} />
        <Redirect to="/module/reflection/1" />
      </Switch>
    </>
  )
})
