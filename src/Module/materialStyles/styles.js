import { makeStyles, withStyles } from '@material-ui/core'
import Card from '../../shared/Card'

export const TextCard = withStyles({
  root: {
    fontFamily: 'PT Serif',
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: '32px',
    textAlign: 'center',
    color: '#000000',
    background: '#FFFFFF',
    padding: '20px 32px 24px',
    width: 384,
    position: 'absolute',
    top: 174,
    left: 0
  }
})(Card)

export const VideoCard = withStyles({
  root: {
    width: 384,
    height: 216,
    right: 0,
    top: 131,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#057DFF'
    }
  }
})(Card)

export const BigModuleCard = withStyles({
  root: {
    position: 'absolute',
    bottom: 56,
    right: 0,
    overflow: 'hidden',
    width: 488,
    height: 288,
    backgroundColor: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer',
      background: '#057DFF'
    }
  }
})(Card)

export const BlockQuestionCard = withStyles({
  root: {
    position: 'absolute',
    bottom: 156,
    left: 0,
    width: 279,
    top: 386,
    boxShadow: 'none',
    height: 109,
    overflow: 'hidden'
  }
})(Card)

export const LikeCard = withStyles({
  root: {
    backgroundColor: '#1DB300',
    width: 129,
    height: 72,
    padding: '24px 16px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    left: 150,
    bottom: 125
  }
})(Card)

export const useStyles = makeStyles({
  playIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    fontSize: 70,
    color: 'white',
    transform: 'translateX(-50%) translateY(-50%)'
  },
  questionImage: {
    position: 'absolute',
    top: -19,
    left: -38
  },
  thumbUpIcon: {
    fontSize: 34,
    color: '#FFFFFF'
  },
  bigModuleCover: {
    position: 'absolute',
    top: -19,
    left: -38,
    '&:hover': {
      opacity: 0.72
    }
  }
})
