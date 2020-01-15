import React, { memo } from 'react'

import { makeStyles } from '@material-ui/core'
import IconButton from '../IconButton'
import Button from '../Button'

import MenuIcon from '@material-ui/icons/Menu'
import RedoIcon from '@material-ui/icons/Redo'
import ArrowBack from '@material-ui/icons/ArrowBack'

import styles from './styles.scss'

const useStyles = makeStyles({
  menu: {
    marginRight: '8px',
    htmlColor: '#000000',
    backgroundColor: '#FFFFFF'
  },
  buttonPrimary: {
    backgroundColor: '#6200EE',
    marginLeft: 'auto',
    color: 'white'
  }
})

export default memo(function(props) {
  const classes = useStyles()

  return (
    <div className="header">
      <IconButton className={classes.menu}>
        <MenuIcon />
      </IconButton>
      <Button startIcon={<ArrowBack fontSize="large" />}>История</Button>
      <Button startIcon={<RedoIcon />} className={classes.buttonPrimary}>
        Пропустить
      </Button>
    </div>
  )
})
