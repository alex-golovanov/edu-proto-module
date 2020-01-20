import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core'
import { useParams } from 'react-router-dom'

import Button from '../shared/Button'
import requiredImage from '../shared/assets/task-required.png'
import SliderControl from '../shared/SliderControl'
import ModalContainer from '../shared/ModalContainer'
import { LockIconStandardStyled } from '../ModuleOverview/LevelsGraph/materialStyles'
import { MODULE_KEYS } from '../ModuleOverview/LevelsGraph/constants'
import { moduleElementMap } from './constants'

import './styles.scss'

const useStyles = makeStyles({
  clearfix: {
    display: 'block',
    width: 656,
    height: 425
  },
  levelImage: {
    display: 'block',
    margin: '0 auto 20px'
  },
  checkButton: {
    margin: '0 auto',
    left: '50%',
    zIndex: 1,
    transform: 'translateX(-50%)'
  }
})

export default memo(function ModuleElement() {
  const classes = useStyles()
  const { level } = useParams()

  let moduleToRender = moduleElementMap[level]

  if (!moduleToRender) moduleToRender = moduleElementMap[MODULE_KEYS.three]

  const { sliderLeft, sliderRight, levelImage, description, recommendedItems } = moduleToRender

  return (
    <>
      <ModalContainer to="/module/overview">
        {sliderLeft && (
          <SliderControl to={sliderLeft.to} left>
            <img src={sliderLeft.image} alt="" />
          </SliderControl>
        )}
        <div className={classes.clearfix} />
        <div className="module-element__content">
          <img src={levelImage} className={classes.levelImage} alt="" />
          <p className="module-element__description">{description}</p>
          <p className="module-element__warning">
            Прохождение заданий недоступно, пока ты не пройдёшь проверочный тест
          </p>
          <Button appearance="primary" className={classes.checkButton} startIcon={<LockIconStandardStyled />}>
            Пройти проверочное
          </Button>
          <div className="module-element__recommended">
            <h3 className="module-element__recommended-header">Рекомендуемые задания</h3>
            <ul className="module-element__recommended-list">
              {recommendedItems.map(item => (
                <li className="module-element__recommended-item">{item}</li>
              ))}
              {level === MODULE_KEYS.four && (
                <>
                  <span className="module-element__recommended-item-required-text">До 23 декабря</span>
                  <img className="module-element__recommended-item-required-image" src={requiredImage} alt="" />
                </>
              )}
            </ul>
          </div>
        </div>
        {sliderRight && (
          <SliderControl to={sliderRight.to}>
            <img src={sliderRight.image} alt="" />
          </SliderControl>
        )}
      </ModalContainer>
    </>
  )
})
