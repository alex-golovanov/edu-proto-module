import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'
import ChatIcon from '@material-ui/icons/Chat'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const useStyles = makeStyles({
  backBtn: {
    left: 15,
    width: 48,
    height: 48,
    htmlColor: '#000000',
    backgroundColor: '#FFF',
    justifySelf: 'flex-start'
  },
  backIcon: {
    color: '#212122'
  },
  chatIcon: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

export default function TaskHeader({ step }) {
  const classes = useStyles()

  return (
    <div className="task-header">
      <span className="sub-header">История • Эпоха Возрождения • 2.0</span>
      <div className="task-header__main">
<<<<<<< HEAD
        <IconButton disableRipple className={classes.backBtn}>
          <Close />
        </IconButton>
        <h1 className="task-header__step">{step === '1' ? 'I' : 'II'} шаг</h1>
=======
        <NavLink to="/module/element/two">
          <IconButton disableRipple className={classes.backBtn}>
            <ArrowBack className={classes.backIcon} />
          </IconButton>
        </NavLink>
        <h1 className="task-header__step">I шаг</h1>
>>>>>>> fix back button link
        <div className="task-header__chat">
          <ChatIcon className={classes.chatIcon} />
          <span className="task-header__chat-number">12</span>
        </div>
      </div>
    </div>
  )
}
