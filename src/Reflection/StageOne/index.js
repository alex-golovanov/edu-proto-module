import React, { memo } from 'react'

import { CardStageOneStyled } from '../materialStyles'
import levelImage from '../../shared/assets/level-3-filled.svg'
import { NavLink } from 'react-router-dom'
import starStruckFace from '../assets/star-struck.png'
import thinkingFace from '../assets/thinking-face.png'
import neutralFace from '../assets/neutral-face.png'
import yawningFace from '../assets/yawning-face.png'

export default memo(function StageOne() {
  return (
    <CardStageOneStyled>
      <img className="reflection__image" src={levelImage} alt="" />
      <h1 className="reflection__header">Ты достиг поставленнной цели</h1>
      <p className="reflection__description">
        «Я могу сравнить мировоззрение людей различных эпох на примере Возрождения и Средневековья»
      </p>
      <div className="reflection__feedback">
        <h2 className="reflection__feedback-header">Оцени материалы этого модуля</h2>
        <div className="reflection__feedback-marks">
          <NavLink to="/module/reflection/2?result=interesting">
            <button className="reflection__feedback-button">
              <img src={starStruckFace} className="reflection__fedback-emoji" alt="" />
              <span>Было интересно и понятно</span>
            </button>
          </NavLink>
          <NavLink to="/module/reflection/2?result=needExamples">
            <button className="reflection__feedback-button">
              <img src={thinkingFace} className="reflection__fedback-emoji" alt="" />
              <span>Интересно,  но не хватило примеров или объяснений</span>
            </button>
          </NavLink>
          <NavLink to="/module/reflection/2?result=neutral">
            <button className="reflection__feedback-button">
              <img src={neutralFace} className="reflection__fedback-emoji" alt="" />
              <span>Ничего особенного</span>
            </button>
          </NavLink>
          <NavLink to="/module/reflection/2?result=notInteresting">
            <button className="reflection__feedback-button">
              <img src={yawningFace} className="reflection__fedback-emoji" alt="" />
              <span>Совсем  не интересно</span>
            </button>
          </NavLink>
        </div>
      </div>
    </CardStageOneStyled>
  )
})
