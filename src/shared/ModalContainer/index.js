import React, { memo } from 'react'

import Close from '@material-ui/icons/Close'
import IconButton from '../IconButton'
import { NavLink } from 'react-router-dom'

import './styles.scss'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    position: 'absolute',
    left: -60,
    top: -60
  },
  icon: {
    pointerEvents: 'none'
  }
})

export default memo(function ModalContainer({ children, scrollable }) {
  const classes = useStyles()

  return (
    <div className="task__container">
      <div className="task__scroll-body">
        <div className={scrollable ? 'task__data-container task__data-container--scroll' : 'task__data-container'}>
          <NavLink to="/">
            <IconButton className={classes.button}>
              <Close className={classes.icon} />
            </IconButton>
          </NavLink>
          {children}
        </div>
      </div>
    </div>
  )
})
