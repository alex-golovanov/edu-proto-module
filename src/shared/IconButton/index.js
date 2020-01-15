import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const CommonStyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    lineHeight: '18px',
    fontWeight: 'normal',
    color: '#000000',
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
})(IconButton)

export default function DefaultStyledIconButton(props) {
  return (
    <CommonStyledButton disableRipple size="large" {...props}>
      {props.children}
    </CommonStyledButton>
  )
}
