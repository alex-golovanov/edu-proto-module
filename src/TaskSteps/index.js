import React from 'react'
import { useParams } from 'react-router-dom'

import TaskHeader from './TaskHeader'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import CheckStep from './CheckStep'

import './styles.scss'

export default function TaskSteps() {
  const { step } = useParams()

  return (
    <div>
      <TaskHeader step={step} />
      {step === '1' && <FirstStep />}
      {step === '2' && <SecondStep />}
      {step === '3' && <ThirdStep />}
      {step === 'check' && <CheckStep />}
    </div>
  )
}
