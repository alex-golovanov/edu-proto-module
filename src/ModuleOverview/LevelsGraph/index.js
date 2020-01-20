import React, { memo, useCallback, useMemo, useRef, useLayoutEffect } from 'react'

import ListIcon from '@material-ui/icons/List'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import VisibilityIcon from '@material-ui/icons/Visibility'

import Button from '../../shared/Button'
import { NavLink } from 'react-router-dom'
import IconButton from '../../shared/IconButton'

import './styles.scss'
import { CardStyled, LockIconSmallStyled, LockIconStandardStyled, useStyles } from './materialStyles'
import { getLevelsMap } from './utils'
import { MODULE_KEYS } from './constants'

export default memo(function LevelsGraph({ currentLevel = MODULE_KEYS.two }) {
  const classes = useStyles()
  const canvasRef = useRef(null)
  const graphRef = useRef(null)

  const secondRef = useRef(null)
  const fourthRef = useRef(null)

  const levelsMap = useMemo(() => getLevelsMap({ secondRef, fourthRef }), [fourthRef, secondRef])

  const draw = useCallback(
    ctx => {
      if (!graphRef.current || !fourthRef.current) return

      const graph = graphRef.current.getBoundingClientRect()
      const fourth = fourthRef.current.getBoundingClientRect()

      const width = 2
      const yCoord = graph.height / 2 + (width + width / 2)

      ctx.beginPath()
      ctx.lineWidth = width.toString()
      ctx.strokeStyle = 'white'
      ctx.moveTo(graph.left, yCoord)
      ctx.lineTo(graph.width / 2, yCoord)
      ctx.stroke()

      ctx.beginPath()
      ctx.lineWidth = width.toString()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.moveTo(graph.width / 2, yCoord)
      ctx.lineTo(fourth.left - fourth.width, yCoord)
      ctx.stroke()
    },
    [graphRef, fourthRef]
  )

  useLayoutEffect(() => {
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
  }, [draw])

  const renderLevels = useCallback(() => {
    return [...levelsMap.entries()].map(([key, data], index) => {
      if (key === currentLevel) {
        return (
          <CardStyled key={key} style={data.style} ref={data.ref}>
            <img src={data.image} className="module-graph__level" alt="" />
            <p className="module-graph__description">{data.description}</p>
            {currentLevel === MODULE_KEYS.four ? (
              <div className="module-graph__buttons module-graph__buttons--vertical">
                <Button appearance="primary" startIcon={<LockIconStandardStyled />}>
                  Пройти проверочное
                </Button>
                <Button appearance="ghost" startIcon={<VisibilityIcon />}>
                  Показать задания
                </Button>
              </div>
            ) : (
              <div className="module-graph__buttons">
                <Button className={classes.buttonLeft} appearance="primary" startIcon={<PlayArrowIcon />}>
                  Начать
                </Button>
                <IconButton>
                  <ListIcon />
                </IconButton>
              </div>
            )}
          </CardStyled>
        )
      }

      const commonClassName = 'module-graph__level-float'
      const className = `${commonClassName} ${commonClassName}--${key}`

      const levelClosed = index > Object.values(MODULE_KEYS).indexOf(currentLevel)
      const levelAchieved = index < Object.values(MODULE_KEYS).indexOf(currentLevel)

      return (
        <div key={key} className={className} ref={data.ref}>
          {levelClosed && (
            <div className={classes.lockIconContainer}>
              <LockIconSmallStyled />
            </div>
          )}
          <NavLink to={data.to}>
            <img src={levelAchieved ? data.imageFilled : data.image} className="module-graph__level" alt="" />
          </NavLink>
        </div>
      )
    })
  }, [currentLevel, levelsMap, classes])

  return (
    <>
      <div className="module-graph" ref={graphRef}>
        {renderLevels()}
      </div>
      <div className="module-graph__canvas-container">
        <canvas ref={canvasRef} width="1500" height="242" id="module-graph__canvas"></canvas>
      </div>
    </>
  )
})
