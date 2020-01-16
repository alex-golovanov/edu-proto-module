import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core'

import TaskContainer from '../shared/TaskContainer'
import textTaskImage from './assets/text-task.png'

const useStyles = makeStyles({
  clearfix: {
    display: 'block',
    width: 866,
    height: 1599
  },
  image: {
    left: -5,
    top: -3,
    position: 'absolute'
  }
})

export default memo(function TaskText() {
  const classes = useStyles()

  return (
    <TaskContainer scrollable>
      <div className={classes.clearfix} />
      <img className={classes.image} src={textTaskImage} />
    </TaskContainer>
  )
})
