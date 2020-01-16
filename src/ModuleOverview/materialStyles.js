import { makeStyles, withStyles } from '@material-ui/styles'
import LockIcon from '@material-ui/icons/Lock'
import Card from '../shared/Card'

export const CardStyled = withStyles({
  root: {
    width: 280,
    height: 242,
    padding: 20,
    paddingTop: 14,
    position: 'relative'
  }
})(Card)

export const LockIconStyled = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 12
  }
})(LockIcon)

export const useStyles = makeStyles({
  buttonLeft: {
    marginRight: 16
  },
  lockIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -30,
    borderRadius: '50%',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 3px 6px rgba(21, 0, 51, 0.11), 0px 3px 6px rgba(21, 0, 51, 0.08)'
  }
})
