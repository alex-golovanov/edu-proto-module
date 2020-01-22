import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import StyledButton from '../../shared/Button'
import DoneWidget from '../Done'

import TaskOneTwoDone from '../assets/done3-1.png'
import TaskThreeOne from '../assets/task3-1.png'

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
    bottom: '89px',
    left: '70px'
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

export default function ThirdStep() {
  const [choose, setChoice] = useState(true)
  const [check, setCheck] = useState(false)

  const history = useHistory()

  const onTaskDone = () => {
    history.push('/tasks/check')
  }

  const classes = useStyles()

  return (
    <div className="task-block">
      {check ? (
        <div
          style={{
            width: '879px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <img style={{ display: 'block', margin: '0 auto' }} src={TaskOneTwoDone} alt="task done" />
          <DoneWidget onClick={onTaskDone} />
        </div>
      ) : choose ? (
        <div
          style={{
            width: '864px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <img style={{ display: 'block', margin: '0 auto' }} src={TaskThreeOne} alt="task 1-2 response" />
          <StyledButton onClick={setCheck} className={classes.sendBtn} appearance="primary">
            <SendIcon className={classes.sendIcon} />
            <span>Отправить на проверку</span>
          </StyledButton>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
