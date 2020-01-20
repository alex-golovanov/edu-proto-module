import { withStyles } from '@material-ui/core'

import Card from '../shared/Card'

export const CardStageOneStyled = withStyles({
  root: {
    width: 656,
    height: 497,
    position: 'fixed',
    top: 122,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '36px 32px 32px',
    textAlign: 'center'
  }
})(Card)

export const CardStageTwoStyled = withStyles({
  root: {
    width: 656,
    height: 394,
    top: 140
  }
})(CardStageOneStyled)

export const CardStageThreeStyled = withStyles({
  root: {
    width: 656,
    height: 336,
    top: 122
  }
})(CardStageOneStyled)

export const CardStageFinalStyled = withStyles({
  root: {
    width: 656,
    height: 336
  }
})(CardStageOneStyled)
