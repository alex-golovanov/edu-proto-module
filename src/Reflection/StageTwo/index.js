import React, { memo, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import navStage2 from '../assets/nav-stage-2.png'
import levelImage from '../../shared/assets/level-3-filled.svg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIosOutlined'

import Button from '../../shared/Button'
import RadioButton from '../../shared/RadioButton'
import headingShape from './../assets/heading-shape.png'
import { CardStageTwoStyled } from './../materialStyles'

const inputs = [
  {
    id: 'canExplain',
    name: 'answer',
    labelText: 'Я разобрался с материалом, могу объяснить другому',
    to: '/module/reflection/final/canExplain'
  },
  {
    id: 'understood',
    name: 'answer',
    labelText: 'Материал модуля мне понятен',
    to: '/module/reflection/3/understood'
  },
  {
    id: 'haveQuestions',
    name: 'answer',
    labelText: 'У меня остались вопросы',
    to: '/module/reflection/3/haveQuestions'
  }
]

export default memo(function StageTwo() {
  let history = useHistory()
  const [answerIndex, setAnswerIndex] = useState(null)

  const onChange = useCallback(e => {
    const index = inputs.findIndex(item => item.id === e.target.id)
    setAnswerIndex(index)
  }, [])

  const onNavigate = useCallback(() => {
    if (answerIndex === null) return

    history.push(inputs[answerIndex].to)
  }, [history, answerIndex])

  return (
    <CardStageTwoStyled>
      <img src={headingShape} className="reflection__heading-image" alt="" />
      <img className="reflection__image reflection__image--small" src={levelImage} alt="" />
      <p className="reflection__description">
        «Я могу сравнить мировоззрение людей различных эпох на примере Возрождения и Средневековья»
      </p>
      <div className="reflection__feedback reflection__feedback--small">
        <h2 className="reflection__feedback-header">Как ты сам оценишь свои успехи в прохождении этого модуля?</h2>
        <ul className="reflection__feedback-list">
          {inputs.map((item, index) => (
            <li className="reflection__feedback-list-item">
              <RadioButton
                labelText={item.labelText}
                id={item.id}
                name={item.name}
                checked={index === answerIndex}
                onChange={onChange}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="reflection__navigation">
        <img src={navStage2} className="reflection__navigation-image" alt="" />
        <Button onClick={onNavigate} appearance="primary" endIcon={<ArrowForwardIcon />}>
          Последний вопрос
        </Button>
      </div>
    </CardStageTwoStyled>
  )
})
