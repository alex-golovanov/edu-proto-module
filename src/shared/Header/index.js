import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'
import IconButton from '../IconButton'
import Button from '../Button'

import MenuIcon from '@material-ui/icons/Menu'
import RedoIcon from '@material-ui/icons/Redo'
import ArrowBack from '@material-ui/icons/ArrowBack'

import './styles.scss'

const useStyles = makeStyles({
  menu: {
    marginRight: '8px',
    htmlColor: '#000000',
    backgroundColor: '#FFFFFF'
  },
  buttonPrimary: {
    marginLeft: 'auto'
  }
})

export default memo(function({ showSkipButton }) {
  const classes = useStyles()

  return (
    <div className="header">
      <IconButton className={classes.menu}>
        <MenuIcon />
      </IconButton>
      {showSkipButton ? (
        <>
          <Button startIcon={<ArrowBack fontSize="large" />}>История</Button>
          <Button
            primary
            component={NavLink}
            to="/module/overview"
            startIcon={<RedoIcon />}
            className={classes.buttonPrimary}
          >
            Пропустить
          </Button>
        </>
      ) : (
        <Button component={NavLink} to="/module" startIcon={<ArrowBack fontSize="large" />}>
          История
        </Button>
      )}
    </div>
  )
})
