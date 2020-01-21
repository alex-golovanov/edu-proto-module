import React from 'react'

import './styles.scss'
import CheckCircle from '@material-ui/icons/CheckCircle'
import { withStyles } from '@material-ui/styles'
import Button from '../Button'
const ButtonStyled = withStyles({
  root: {
    paddingTop: 11,
    paddingBottom: 11
  }
})(Button)

export default function InfoCard({ header, text, btnTxt, onClick = () => false }) {
  return (
    <div className="info-card">
      <h3 className="info-card__header">{header}</h3>
      <p className="info-card__text">{text}</p>
      <ButtonStyled onClick={onClick} appearance="primary" startIcon={<CheckCircle fontSize="large" />}>
        {btnTxt}
      </ButtonStyled>
    </div>
  )
}
