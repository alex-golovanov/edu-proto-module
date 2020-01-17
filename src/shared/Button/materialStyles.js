import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export const CommonStyledButton = withStyles({
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

export const PrimaryStyledButton = withStyles({
  root: {
    backgroundColor: '#6200EE',
    color: 'white'
  }
})(CommonStyledButton)

export const GhostStyledButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    color: '#000000'
  }
})(CommonStyledButton)
