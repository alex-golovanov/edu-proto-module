import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

import './styles.scss'

import InfoCard from '../../shared/InfoCard'
import ModalContainer from '../../shared/ModalContainer'
import levelTwo from '../../shared/assets/level-2.svg'
import levelTwoColor from '../../shared/assets/level-2-color.svg'
import circleGreen from './../circle.svg'
import { levelTwoStagesData, levelTwoStagesDataDone } from '../constants'
import levelThree from '../../shared/assets/level-3.svg'

import SliderControl from '../../shared/SliderControl'
import { MODULE_KEYS } from '../../ModuleOverview/LevelsGraph/constants'
import { StageCard } from './StageCard'

export default memo(function ModuleElementLevelTwo() {
  const location = useLocation()
  const itemDone = location.pathname.includes('done')
  const stagesData = itemDone ? levelTwoStagesDataDone : levelTwoStagesData

  return (
    <>
      <ModalContainer to="/module/overview" scrollable>
        <div className="content-container">
          <div className="image-container">
            <img className={itemDone ? 'image__color' : 'image__circle'} alt="level" src={circleGreen} />
            <img className="image__main" alt="level" src={itemDone ? levelTwoColor : levelTwo} />
          </div>
          <h1 className="main-header">Я могу перечислить особенности менталитета человека эпохи Возрождения.</h1>
          {!itemDone && (
            <InfoCard
              header="Как это работает"
              text="Задания разделены на группы — I шаг, II шаг и так далее. На каждом шаге достаточно выполнить одно задание, но
        можно и больше. Если хочешь, можно проходить их не по порядку."
              btnTxt="Понятно"
            />
          )}
          <div className="stages">
            {stagesData.stage.map(({ title, cards, check }) => {
              return (
                <>
                  <span className={`stages__divider ${check && 'stages__check'}`}>{title}</span>
                  <div className="stages__container">
                    {cards.map(({ cardTitle, variant = false, done = false }) => {
                      return <StageCard cardTitle={cardTitle} variant={variant} done={done} />
                    })}
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <SliderControl to={`/module/element/${MODULE_KEYS.three}`}>
          <img src={levelThree} alt="" />
        </SliderControl>
      </ModalContainer>
    </>
  )
})
