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

export default function DefaultStyledButton(props) {
  return (
    <CommonStyledButton disableRipple {...props}>
      {props.children}
    </CommonStyledButton>
  )
}

// export default Button
