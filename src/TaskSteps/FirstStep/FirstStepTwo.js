import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Chevron from '@material-ui/icons/ChevronLeft'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import { makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { SliderContext } from '../TasksSlider'
import StyledButton from '../../shared/Button'
import DoneWidget from '../Done'

import TaskOneTwo from '../assets/task1-2.png'
import TaskOneTwoDone from '../assets/done1-2.png'
import TaskTwoResponse from '../assets/response1-2.png'

const useStyles = makeStyles({
  chooseBtnTwo: {
    position: 'absolute',
    width: '213px',
    height: '48px',
    padding: '9px 0px',
    bottom: '45px',
    left: '-9px',
    right: 0,
    margin: '0 auto'
  },
  sendBtn: {
    position: 'absolute',
    width: '230px',
    height: '48px',
    padding: '9px 4px',
    bottom: '93px',
    right: '71px'
  },
  sendIcon: {
    marginRight: '3px'
  },
  chooseIcon: {
    transform: 'rotate(-90deg)'
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

export default function FirstStepTwo() {
  const [choose, setChoice] = useState(false)
  const [check, setCheck] = useState(false)

  const history = useHistory()

  const onTaskDone = () => {
    history.push('/tasks/2')
  }

  const classes = useStyles()
  const { toggleSlide } = useContext(SliderContext)

  return (
    <div className="task-block">
      {check ? (
        <>
          <img src={TaskOneTwoDone} alt="task done" />
          <DoneWidget onClick={onTaskDone} />
        </>
      ) : choose ? (
        <>
          <img src={TaskTwoResponse} alt="task 1-2 response" />
          <StyledButton onClick={setCheck} className={classes.sendBtn} appearance="primary">
            <SendIcon className={classes.sendIcon} />
            <span>Отправить на проверку</span>
          </StyledButton>
        </>
      ) : (
        <>
          <img src={TaskOneTwo} alt="task one" />
          <StyledButton onClick={setChoice} className={classes.chooseBtnTwo} appearance="primary">
            <Chevron className={classes.chooseIcon} />
            <span>Выбрать это задание</span>
          </StyledButton>

          <StyledButton onClick={toggleSlide} className={classes.secondTaskBtnTwo} appearance="secondary">
            <ArrowLeftIcon className={classes.leftArrow} />
            <span>Другое задание</span>
          </StyledButton>
        </>
      )}
    </div>
  )
}
