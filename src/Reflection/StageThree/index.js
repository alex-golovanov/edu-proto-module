import React, { memo, useCallback, useState, useMemo } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'

import { CardStageThreeStyled } from '../materialStyles'
import headingShape from '../assets/heading-shape.png'
import levelImage from '../../shared/assets/level-3-filled.svg'
import RadioButton from '../../shared/RadioButton'
import navStage2 from '../assets/nav-stage-2.png'
import Button from '../../shared/Button'
import { reflectionImages } from '../constants'

const stagesData = {
  understood: {
    header: 'Хотел бы изучить этот модуль глубже?',
    inputs: [
      {
        id: 'yes',
        name: 'answer',
        labelText: 'Да'
      },
      { id: 'no', name: 'answer', labelText: 'Нет' }
    ],
    to: '/module/reflection/final/understood'
  },
  haveQuestions: {
    header: 'Итак, у тебя остались вопросы. Как поступим?',
    inputs: [
      {
        id: 'myself',
        name: 'answer',
        labelText: 'Вопросы незначительные, попробую разобраться сам'
      },
      { id: 'needTeacher', name: 'answer', labelText: 'Мне требуется консультация' }
    ],
    to: '/module/reflection/final/haveQuestions'
  }
}

const getStage = resultName => stagesData[resultName] || stagesData[0]

export default memo(function StageThree() {
  let history = useHistory()
  const location = useLocation()
  const [answerIndex, setAnswerIndex] = useState(null)
  const { result } = useParams()

  const stage = useMemo(() => getStage(result), [result])

  const firstStageResult = useMemo(() => {
    const [_, result] = location.search.split('=')
    return result
  }, [location])

  const onChange = useCallback(
    e => {
      const index = stage.inputs.findIndex(item => item.id === e.target.id)
      setAnswerIndex(index)
    },
    [stage.inputs]
  )

  const onNavigate = useCallback(() => {
    if (answerIndex === null) return

    history.push(`${stage.to}?result=${result}`)
  }, [history, stage.to, answerIndex, result])

  return (
    <CardStageThreeStyled>
      <img src={headingShape} className="reflection__heading-image" alt="" />
      <img className="reflection__image reflection__image--small" src={levelImage} alt="" />
      <p className="reflection__description">
        «Я могу сравнить мировоззрение людей различных эпох на примере Возрождения и Средневековья»
      </p>
      <div className="reflection__feedback reflection__feedback--small-extra">
        <h2 className="reflection__feedback-header">{stage.header}</h2>
        <ul className="reflection__feedback-list">
          {stage.inputs.map((item, index) => (
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
        <div className="reflection__first-stage-result-image-container">
          <img src={reflectionImages[firstStageResult]} alt="" className="reflection__first-stage-result-image" />
        </div>
        <img src={navStage2} className="reflection__navigation-image" alt="" />
        <Button onClick={onNavigate} appearance="primary" startIcon={<CheckOutlinedIcon />}>
          Завершить
        </Button>
      </div>
    </CardStageThreeStyled>
  )
})
