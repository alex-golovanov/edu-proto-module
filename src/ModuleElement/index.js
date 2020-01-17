import React from 'react'

import TaskContainer from '../shared/TaskContainer'
import './styles.scss'
import levelTwo from '../shared/assets/level-2.svg'
import circleGreen from './circle.svg';
import Button from '../shared/Button';
import CheckCircle from '@material-ui/icons/CheckCircle'
import PlayArrow from '@material-ui/icons/PlayArrow'
import { withStyles } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core'

const ButtonStyled = withStyles({
  root: {
    paddingTop: 11,
    paddingBottom: 11,
  }
})(Button)

const CardBtn = withStyles({
  root: {
    marginTop: 6,
    marginBottom: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    marginLeft: -4,
  },
  'MuiSvgIcon-root': {
    fill: "blue !important"
  },
})(Button)

const useStyles = makeStyles({
  icon: {
    color: '#6200EE',
  }
})


const stagesData = {
  stage: [{
    title: 'I',
    check: false,
    cards: [{
      cardTitle: 'Понятие Ренессанса',
    }, {
      cardTitle: 'Что такое Ренессанс'
    }]
  },
    {
      title: 'II',
      check: false,
      cards: [{
        cardTitle: 'Мировоззрение Ренессанса'
      }, {
        cardTitle: 'Человек эпохи Возрождения'
      }]
    },
    {
      title: 'III',
      check: false,
      cards: [{
        cardTitle: 'Выдающиеся деятели эпохи Возрождения'
      }]
    },
    {
      title: 'Проверочные',
      check: true,
      cards: [{
        cardTitle: 'Эпоха Возрождения',
        variant: 'Вариант I',
      },
        {
          cardTitle: 'Эпоха Возрождения',
          variant: 'Вариант II',
        }]
    }
  ]
}

export default function ModuleElement() {
  const classes = useStyles()
    return (
      <>
          <TaskContainer scrollable>
            <div className="content-container">
              <div className="image-container">
                <img className="image__circle" alt="level" src={circleGreen} />
                <img className="image__main" alt="level" src={levelTwo} />
              </div>
              <h1 className="main-header">Я могу перечислить особенности менталитета человека эпохи Возрождения.</h1>
              <div className="task-card">
                <h3 className="task-card__header">
                  Как это работает
                </h3>
                <p className="task-card__text">
                  Задания разделены на группы — I шаг, II шаг и так далее. На каждом шаге достаточно выполнить одно задание, но можно и больше. Если хочешь, можно проходить их не по порядку.
                </p>
                <ButtonStyled appearance="primary" startIcon={<CheckCircle fontSize="large" />}>Понятно</ButtonStyled>
              </div>
              <div className="stages">
                {stagesData.stage.map(({ title, cards, check }) => {
                  return (
                    <>
                      <span className={`stages__divider ${check && 'stages__check'}`}>
                        {title}
                     </span>
                      <div className="stages__container">

                        {cards.map(({ cardTitle, variant = false}) => {
                          return (

                            <div className="stage-card">
                              <p className="stage-card__text">
                                {cardTitle}
                              </p>
                              {variant && <p className="stage-card__variant">
                                {variant}
                              </p>}
                              <CardBtn appearance="ghost" startIcon={<PlayArrow  fontSize="large" />}>Начать</CardBtn>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </TaskContainer>
      </>
    )
}
