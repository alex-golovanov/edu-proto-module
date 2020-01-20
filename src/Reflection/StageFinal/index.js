import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import { CardStageFinalStyled } from '../materialStyles'
import headingShape from '../assets/heading-shape.png'
import levelImage from '../../shared/assets/level-3-filled.svg'

const stagesData = {
  understood: { emoji: '👍', text: ['Хорошо, как скажешь!', 'Спасибо за ответы.'] },
  canExplain: { emoji: '💪', text: ['Отлично! У тебя все получится!', 'Спасибо за ответы.'] },
  haveQuestions: { emoji: '👌', text: ['Договорились! Учитель получит твое пожелание.', 'Спасибо за ответы.'] }
}

export default memo(function StageThree() {
  const { result } = useParams()

  return (
    <CardStageFinalStyled>
      <img src={headingShape} className="reflection__heading-image" alt="" />
      <img className="reflection__image reflection__image--small" src={levelImage} alt="" />
      <p className="reflection__description">
        «Я могу сравнить мировоззрение людей различных эпох на примере Возрождения и Средневековья»
      </p>
      <div className="reflection__results">
        <span className="reflection__results-emoji">{stagesData[result].emoji}</span>
        {stagesData[result].text.map(item => (
          <span>{item}</span>
        ))}
      </div>
    </CardStageFinalStyled>
  )
})
