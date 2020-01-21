import React from 'react'
import './styles.scss'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import ChatIcon from '@material-ui/icons/Chat'

const useStyles = makeStyles({
  backBtn: {
    left: 15,
    width: 48,
    height: 48,
    htmlColor: '#000000',
    backgroundColor: '#FFF',
    justifySelf: 'flex-start'
  },
  chatIcon: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

export default function TaskHeader() {
  const classes = useStyles()

  return (
    <div className="task-header">
      <span className="sub-header">История • Эпоха Возрождения • 2.0</span>
      <div className="task-header__main">
        <IconButton disableRipple className={classes.backBtn}>
          <Close />
        </IconButton>
        <h1 className="task-header__step">I шаг</h1>
        <div className="task-header__chat">
          <ChatIcon className={classes.chatIcon} />
          <span className="task-header__chat-number">12</span>
        </div>
      </div>
    </div>
  )
}
