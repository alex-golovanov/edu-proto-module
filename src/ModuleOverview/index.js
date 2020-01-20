import React, { memo, useEffect, useState } from 'react'

import Header from '../shared/Header'
import SideNav from '../shared/SideNav'

import controls from './assets/controls.png'
import LevelsGraph from './LevelsGraph'

import './styles.scss'
import { MODULE_KEYS, MODULE_ROUTES_INVERSED } from './LevelsGraph/constants'

export default memo(function ModuleOverview() {
  const [currentLevel, setCurrentLevel] = useState(MODULE_KEYS.two)

  useEffect(() => {
    const routeKey = window.location.pathname

    if (!MODULE_ROUTES_INVERSED[routeKey]) {
      console.warn('no card for this route exists, check passed location, fallback to /overview/step-2')
      return setCurrentLevel(MODULE_KEYS.two)
    }

    return setCurrentLevel(MODULE_ROUTES_INVERSED[routeKey])
  })

  return (
    <>
      <Header />
      <SideNav />
      <div className="module-overview">
        <h1 className="module-overview__header">Эпоха возрождения</h1>
        <h2 className="module-overview__subhead">11–23 декабря, осталось 11 дней</h2>
        <div className="module-container__controls">
          <img src={controls} className="module-container__controls-image" alt="" />
        </div>
        <p className="module-container__description">
          Эпоха Возрождения в Европе XIV–XVI вв. знаменует развитие почти всех сфер культуры, а также становление
          светской картины мира, гуманизма и научного мировоззрения (культурное достояние Европы вплоть до наших дней).
        </p>
      </div>
      <LevelsGraph currentLevel={currentLevel} />
    </>
  )
})
