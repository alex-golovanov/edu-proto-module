import React, { memo } from 'react'
import { makeStyles } from '@material-ui/styles'

import TaskContainer from '../shared/TaskContainer'
import videoTaskImage from './assets/video-task.png'

const useStyles = makeStyles({
  clearfix: {
    display: 'block',
    width: 656,
    height: 398
  },
  image: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)'
  }
})

export default memo(function TaskVideo() {
  const classes = useStyles()

  return (
    <TaskContainer>
      <div className={classes.clearfix} />
      <img src={videoTaskImage} className={classes.image} />
    </TaskContainer>
  )
})
