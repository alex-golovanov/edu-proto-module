import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  container: {
    position: 'relative'
  },
  widget: {
    position: 'absolute',
    bottom: -100,
    left: 50
  },
  firstTaskStarted: {
    width: 864,
    height: 758
  },
  chooseTask: {
    position: 'absolute',
    bottom: 45,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  nextTask: {
    position: 'absolute',
    bottom: 45,
    right: 20
  },
  prevTask: {
    position: 'absolute',
    bottom: 45,
    left: 20
  },
  sendToCheck: {
    position: 'absolute',
    bottom: 80,
    left: 60
  },
  sendToCheckSecond: {
    position: 'absolute',
    bottom: 93,
    right: 60
  },
  forward: {
    position: 'absolute',
    bottom: -70,
    right: 47
  }
})
