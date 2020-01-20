import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import NavigateNextIcon from '@material-ui/icons/NavigateNextOutlined'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBeforeOutlined'

import './styles.scss'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  beforeIcon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: -35,
    fontSize: 40,
    color: '#FFFFFF'
  },
  nextIcon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    right: -35,
    fontSize: 40,
    color: '#FFFFFF'
  }
})

export default memo(function SliderControl({ children, left, to }) {
  const classes = useStyles()

  return left ? (
    <NavLink to={to} className="slider__control slider__control--left">
      <NavigateBeforeIcon className={classes.beforeIcon} />
      {children}
    </NavLink>
  ) : (
    <NavLink to={to} className="slider__control">
      {children}
      <NavigateNextIcon className={classes.nextIcon} />
    </NavLink>
  )
})
