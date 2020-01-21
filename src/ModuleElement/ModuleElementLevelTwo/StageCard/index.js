import React from 'react'

import './styles.scss'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Check from '@material-ui/icons/Check'
import { withStyles } from '@material-ui/styles'
import Button from '../../../shared/Button'

const CardBtn = withStyles({
  root: {
    marginTop: 6,
    marginBottom: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    marginLeft: -4
  },
  'MuiSvgIcon-root': {
    fill: 'blue !important'
  }
})(Button)

export function StageCard({ cardTitle, variant, done }) {
  return (
    <div className={`stage-card ${done ? 'stage-card__done' : 'stage-card__progress'}`}>
      <p className="stage-card__text">{cardTitle}</p>
      {variant && <p className="stage-card__variant">{variant}</p>}
      {done ? (
        <div className="stage-done-mark">
          <Check fontSize="large" />
          Выполнено
        </div>
      ) : (
        <CardBtn appearance="ghost" startIcon={<PlayArrow fontSize="inherit" />}>
          Начать
        </CardBtn>
      )}
    </div>
  )
}
