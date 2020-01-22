import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  container: {
    position: 'relative'
  },
  widget: {
    position: 'absolute',
    bottom: -120,
    left: 50
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
    bottom: 90,
    left: 65
  },
  returnBack: {},
  returnBackContainer: {
    position: 'absolute',
    bottom: 140,
    backgroundColor: '#f1f2f6',
    right: 40
  },
  sendToCheckSecond: {
    position: 'absolute',
    bottom: 93,
    right: 60
  },
  forward: {
    position: 'absolute',
    bottom: -90,
    right: 47
  },
  forwardIcon: {
    fontSize: 23
  }
})
