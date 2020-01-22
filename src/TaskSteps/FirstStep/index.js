import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Chevron from '@material-ui/icons/ChevronLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

import InfoCard from '../../shared/InfoCard'
import StyledButton from '../../shared/Button'
import DoneWidget from '../Done'
import { SliderContext } from '../TasksSlider'
import TasksSlider from '../TasksSlider'

import TaskOneImg from '../assets/task-1.png'
import Response from '../assets/response.png'
import TaskOneDone from '../assets/task-1-done.png'
import TaskOneTwo from '../assets/task1-2.png'

const useStyles = makeStyles({
  chooseBtn: {
    position: 'absolute',
    width: '213px',
    height: '48px',
    padding: '9px 0px',
    bottom: '40px',
    left: '-9px',
    right: 0,
    margin: '0 auto'
  },
  chooseBtnTwo: {
    position: 'absolute',
    width: '213px',
    height: '48px',
    padding: '9px 0px',
    bottom: '45px',
    left: '2px',
    right: 0,
    margin: '0 auto'
  },
  sendBtn: {
    position: 'absolute',
    width: '230px',
    height: '48px',
    padding: '9px 4px',
    bottom: '35px',
    right: '37px'
  },
  sendIcon: {
    marginRight: '3px'
  },
  chooseIcon: {
    transform: 'rotate(-90deg)'
  },
  secondTaskBtn: {
    position: 'absolute',
    width: '214px',
    height: '48px',
    padding: '9px 12px',
    bottom: '41px',
    right: '15px'
  },
  secondTaskBtnTwo: {
    position: 'absolute',
    width: '176px',
    height: '48px',
    padding: '9px 12px',
    bottom: '41px',
    left: '34px'
  },
  leftArrow: {
    marginRight: '5px'
  }
})

function FirstStep() {
  const [allClear, setClear] = useState(false)
  const [choose, setChoice] = useState(false)
  const [checkTask, setCheck] = useState(false)

  const { toggleSlide } = useContext(SliderContext)

  const classes = useStyles()
  return (
    <div>
      {checkTask ? (
        <div className="task-block">
          <img src={TaskOneDone} alt="task done" />
          <DoneWidget />
        </div>
      ) : (
        <>
          {!allClear && (
            <div className="info-wrapper">
              <InfoCard
                header="Выбирай задания, которые больше нравятся"
                text="Чтобы пройти шаг, достаточно выполнить любое задание. Если хочешь, можно сделать больше."
                btnTxt="Понятно"
                onClick={setClear}
              />
            </div>
          )}
          <div className={`task-block ${choose ? 'task-block__choose' : 'task-block__default'}`}>
            <img src={TaskOneImg} alt="task one" className="task-one" />
            {choose ? (
              <>
                <img src={Response} alt="response" className="response" />
                <StyledButton onClick={setCheck} className={classes.sendBtn} appearance="primary">
                  <SendIcon className={classes.sendIcon} />
                  <span>Отправить на проверку</span>
                </StyledButton>
              </>
            ) : (
              <>
                <StyledButton onClick={setChoice} className={classes.chooseBtn} appearance="primary">
                  <Chevron className={classes.chooseIcon} />
                  <span>Выбрать это задание</span>
                </StyledButton>

                <StyledButton onClick={toggleSlide} className={classes.secondTaskBtn} appearance="secondary">
                  <span>Другое задание</span>
                  <ArrowRightIcon />
                </StyledButton>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function FirstStepTwo() {
  const [choose, setChoice] = useState(false)
  const classes = useStyles()
  const { toggleSlide } = useContext(SliderContext)

  return (
    <div className="task-block">
      <img src={TaskOneTwo} alt="task one" />
      <StyledButton onClick={setChoice} className={classes.chooseBtnTwo} appearance="primary">
        <Chevron className={classes.chooseIcon} />
        <span>Выбрать это задание</span>
      </StyledButton>

      <StyledButton onClick={toggleSlide} className={classes.secondTaskBtnTwo} appearance="secondary">
        <ArrowLeftIcon className={classes.leftArrow} />
        <span>Другое задание</span>
      </StyledButton>
    </div>
  )
}

export default function() {
  return <TasksSlider slides={[<FirstStep />, <FirstStepTwo />]} />
}
