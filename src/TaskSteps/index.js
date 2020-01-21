import React from 'react'
import { useParams } from 'react-router-dom'

import './styles.scss'
import TaskHeader from './TaskHeader'
import SecondStep from './SecondStep'
import FirstStep from './FirstStep'

export default function TaskSteps() {
  const { step } = useParams()

  return (
    <div>
      <TaskHeader step={step} />
      {step === '1' && <FirstStep />}
      {step === '2' && <SecondStep />}
    </div>
  )
}
