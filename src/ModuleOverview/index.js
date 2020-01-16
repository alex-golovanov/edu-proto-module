import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ListIcon from '@material-ui/icons/List'

import Header from '../shared/Header'
import SideNav from '../shared/SideNav'
import Button from '../shared/Button'
import IconButton from '../shared/IconButton'

import controls from './assets/controls.png'
import levelTwo from './assets/level-2.png'
import levelThree from './assets/level-3.png'
import levelFour from './assets/level-4.png'

import './styles.scss'
import { CardStyled, LockIconStyled, useStyles } from './materialStyles'

export default memo(function ModuleOverview() {
  const classes = useStyles()
  const canvasRef = useRef(null)
  const graphRef = useRef(null)
  const thirdRef = useRef(null)
  const fourthRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    function listener() {
      const c = canvasRef.current
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, c.width, c.height)
      draw(ctx)
    }

    listener()

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  const draw = useCallback(
    ctx => {
      const graph = graphRef.current.getBoundingClientRect()
      const third = thirdRef.current.getBoundingClientRect()
      const fourth = fourthRef.current.getBoundingClientRect()

      const width = 2
      ctx.beginPath()
      ctx.lineWidth = width.toString()
      ctx.strokeStyle = 'white'
      ctx.moveTo(graph.left, graph.height / 2 + (width + 1))
      ctx.lineTo(third.left - third.width, graph.height / 2 + (width + 1))
      ctx.stroke()

      ctx.beginPath()
      ctx.lineWidth = width.toString()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.moveTo(third.left - third.width, graph.height / 2 + (width + 1))
      ctx.lineTo(fourth.left - fourth.width, graph.height / 2 + (width + 1))
      ctx.stroke()
    },
    [graphRef, canvasRef, fourthRef, thirdRef]
  )

  return (
    <>
      <Header />
      <SideNav />
      <div className="module-overview">
        <h1 className="module-overview__header">Эпоха возрождения</h1>
        <h2 className="module-overview__subhead">11–23 декабря, осталось 11 дней</h2>
        <div className="module-container__controls">
          <img src={controls} className="module-container__controls-image" />
        </div>
        <p className="module-container__description">
          Эпоха Возрождения в Европе XIV–XVI вв. знаменует развитие почти всех сфер культуры, а также становление
          светской картины мира, гуманизма и научного мировоззрения (культурное достояние Европы вплоть до наших дней).
        </p>
      </div>
      <div className="module-graph" ref={graphRef}>
        <CardStyled>
          <img src={levelTwo} className="module-graph__level" />
          <p className="module-graph__description">
            Я могу назвать и характеризовать основные периоды эпохи Возрождения
          </p>
          <div className="module-graph__buttons">
            <Button
              component={NavLink}
              to="/module/overview"
              className={classes.buttonLeft}
              primary
              startIcon={<PlayArrowIcon />}
            >
              Начать
            </Button>
            <IconButton>
              <ListIcon />
            </IconButton>
          </div>
        </CardStyled>
        <div ref={thirdRef} className="module-graph__level-float module-graph__level-float--three">
          <div className={classes.lockIconContainer}>
            <LockIconStyled />
          </div>
          <img src={levelThree} className="module-graph__level" />
        </div>
        <div ref={fourthRef} className="module-graph__level-float module-graph__level-float--four">
          <div className={classes.lockIconContainer}>
            <LockIconStyled />
          </div>
          <img src={levelFour} className="module-graph__level" />
        </div>
      </div>
      <div className="module-graph__canvas-container">
        <canvas ref={canvasRef} width="1500" height={242} id="module-graph__canvas"></canvas>
      </div>
    </>
  )
})
