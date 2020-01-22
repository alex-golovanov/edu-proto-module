import React, { memo, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import SendIcon from '@material-ui/icons/Send'

import Button from '../../shared/Button'
import { SliderContext } from '../TasksSlider'
import TasksSlider from '../TasksSlider'

import firstTask from './assets/step-2-1.png'
import firstTaskStarted from './assets/step-2-1-started.png'
import firstTaskDone from './assets/step-2-1-done.png'
import secondTask from './assets/step-2-2.png'
import secondTaskStarted from './assets/step-2-2-started.png'
import secondTaskDone from './assets/step-2-2-done.png'
import widgetDone from './assets/widget-2-done.png'
import { useStyles } from './materialStyles'

const FirstItem = () => {
  const [done, setDone] = useState(false)
  const { toggleSlide } = useContext(SliderContext)
  const [started, setStarted] = useState(false)
  const classes = useStyles()

  if (done) {
    return (
      <div className={classes.container}>
        <img src={firstTaskDone} alt="" />
        <img className={classes.widget} src={widgetDone} alt="" />
        <Button
          component={NavLink}
          to="/tasks/3"
          className={classes.forward}
          appearance="primary"
          startIcon={<ArrowForwardIcon />}
        >
          Следующий шаг
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <img src={started ? firstTaskStarted : firstTask} className={started && classes.firstTaskStarted} alt="" />
      {started ? (
        <Button
          className={classes.sendToCheck}
          onClick={() => setDone(true)}
          appearance="primary"
          startIcon={<SendIcon />}
        >
          Отправить на проверку
        </Button>
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
          to="/module"
          className={classes.forward}
          appearance="primary"
          startIcon={<ArrowForwardIcon />}
        >
          Следующий шаг
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <img src={started ? secondTaskStarted : secondTask} alt="" />
      {started ? (
        <Button
          className={classes.sendToCheckSecond}
          onClick={() => setDone(true)}
          appearance="primary"
          startIcon={<SendIcon />}
        >
          Отправить на проверку
        </Button>
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
