import React, { memo, useContext, useState } from 'react'

import { SliderContext } from '../TasksSlider'
import TasksSlider from '../TasksSlider'

import firstTask from '../assets/step-2-1.png'
import secondTaskDone from '../assets/step-2-2-done.png'
import firstTaskDone from '../assets/step-2-1-done.png'
import widgetDone from '../assets/widget-2-done.png'
import secondTask from '../assets/step-2-2.png'

const FirstItem = () => {
  const [done, setDone] = useState(false)
  const { toggleSlide } = useContext(SliderContext)

  return done ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={firstTaskDone} />
      <img src={widgetDone} />
    </div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={firstTask} />
      <button onClick={() => setDone(true)}>сдать</button>
      <button onClick={toggleSlide}>следующее</button>
    </div>
  )
}

const SecondItem = () => {
  const [done, setDone] = useState(false)
  const { toggleSlide } = useContext(SliderContext)

  return done ? (
    <div>
      <img src={secondTaskDone} />
      <img src={widgetDone} />
    </div>
  ) : (
    <div>
      <img src={secondTask} />
      <button onClick={() => setDone(true)}>сдать</button>
      <button onClick={toggleSlide}>предыдущее</button>
    </div>
  )
}

export default memo(function() {
  return <TasksSlider slides={[<FirstItem />, <SecondItem />]} />
})
