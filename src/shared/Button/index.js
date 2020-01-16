import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const CommonStyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    padding: '15px 22px',
    lineHeight: '18px',
    fontWeight: 'normal',
    color: '#000000',
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#057DFF',
      boxShadow: 'none',
      color: '#FFFFFF'
    },
    '&:active': {
      backgroundColor: '#1A53BC',
      color: '#FFFFFF',
      boxShadow: 'none'
    }
  }
})(Button)

const PrimaryStyledButton = withStyles({
  root: {
    backgroundColor: '#6200EE',
    color: 'white'
  }
})(CommonStyledButton)

export default function StyledButton(props) {
  return props.primary ? (
    <PrimaryStyledButton disableRipple {...props}>
      {props.children}
    </PrimaryStyledButton>
  ) : (
    <CommonStyledButton disableRipple {...props}>
      {props.children}
    </CommonStyledButton>
  )
}
