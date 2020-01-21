import React from 'react'
import { useParams } from 'react-router-dom'

import './styles.scss'
import TaskHeader from './TaskHeader'
import SecondStep from './SecondStep'

export default function TaskSteps() {
  const { step } = useParams()

  return (
    <div>
      <TaskHeader step={step} />
      {step === '1' && <h1>Hello one</h1>}
      {step === '2' && <SecondStep />}
    </div>
  )
}
