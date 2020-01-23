import React, { memo, useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import LevelUpIcon from '@material-ui/icons/ExposurePlus1'
import SendIcon from '@material-ui/icons/Send'

import Button from '../../shared/Button'
import { SliderContext } from '../TasksSlider'
import TasksSlider from '../TasksSlider'

import firstTask from './assets/check-1-1.png'
import firstTaskStarted from './assets/check-1-2.png'
import firstTaskDone from './assets/check-1-done.png'
import secondTask from './assets/check-2-1.png'
import secondTaskStarted from './assets/check-2-2.png'
import secondTaskDone from './assets/check-2-done.png'
import widgetDone from '../SecondStep/assets/widget-2-done.png'

import { useStyles } from './materialStyles'

const FirstItem = () => {
  const [done, setDone] = useState(false)
  const { toggleSlide } = useContext(SliderContext)
  const [started, setStarted] = useState(false)
  const classes = useStyles()

  const { stage } = useParams()
  useEffect(() => {
    if (stage) {
      toggleSlide()
    }
  }, [])

  if (done) {
    return (
      <div className={classes.container}>
        <img src={firstTaskDone} alt="" />
        <img className={classes.widget} src={widgetDone} alt="" />
        <Button
          component={NavLink}
          to="/module/overview/step-final"
          className={classes.forward}
          appearance="primary"
          startIcon={<LevelUpIcon className={classes.forwardIcon} />}
        >
          Следующий уровень
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <img src={started ? firstTaskStarted : firstTask} alt="" />
      {started ? (
        <>
          <Button
            className={classes.sendToCheck}
            onClick={() => setDone(true)}
            appearance="primary"
            startIcon={<SendIcon />}
          >
            Отправить на проверку
          </Button>
          <div className={classes.returnBackContainer}>
            <Button className={classes.returnBack} onClick={() => setStarted(false)} appearance="ghost">
              Выбрать другое задание
            </Button>
          </div>
        </>
      ) : (
        <>
          <Button
            className={classes.chooseTask}
            onClick={() => setStarted(true)}
            appearance="primary"
            startIcon={<ArrowDownIcon />}
          >
            Выбрать это задание
          </Button>
          <Button className={classes.nextTask} onClick={toggleSlide} endIcon={<ArrowRightIcon />}>
            Другое задание
          </Button>
        </>
      )}
    </div>
  )
}

const SecondItem = () => {
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const { toggleSlide } = useContext(SliderContext)
  const classes = useStyles()

  if (done) {
    return (
      <div className={classes.container}>
        <img src={secondTaskDone} alt="" />
        <img className={classes.widget} alt="" src={widgetDone} />
        <Button
          component={NavLink}
          to="/module/overview/step-final"
          className={classes.forward}
          appearance="primary"
          startIcon={<LevelUpIcon className={classes.forwardIcon} />}
        >
          Следующий уровень
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <img src={started ? secondTaskStarted : secondTask} alt="" />
      {started ? (
        <>
          <Button
            className={classes.sendToCheck}
            onClick={() => setDone(true)}
            appearance="primary"
            startIcon={<SendIcon />}
          >
            Отправить на проверку
          </Button>
          <div className={classes.returnBackContainer}>
            <Button className={classes.returnBack} onClick={() => setStarted(false)} appearance="ghost">
              Выбрать другое задание
            </Button>
          </div>
        </>
      ) : (
        <>
          <Button
            className={classes.chooseTask}
            onClick={() => setStarted(true)}
            appearance="primary"
            startIcon={<ArrowDownIcon />}
          >
            Выбрать это задание
          </Button>
          <Button className={classes.prevTask} onClick={toggleSlide} startIcon={<ArrowLeftIcon />}>
            Другое задание
          </Button>
        </>
      )}
    </div>
  )
}

export default memo(function() {
  return <TasksSlider slides={[<FirstItem />, <SecondItem />]} />
})
