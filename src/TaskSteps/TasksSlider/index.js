import React, { createContext, memo, useCallback, useState } from 'react'

import './styles.scss'

export const SliderContext = createContext({ toggleSlide: null })

export default memo(function SecondStep({ slides, width = 864 }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const toggleSlide = useCallback(() => setActiveSlideIndex(activeSlideIndex === 0 ? 1 : 0), [activeSlideIndex])

  return (
    <SliderContext.Provider value={{ toggleSlide }}>
      <div className="task-steps__container">
        <div className="task-steps__scroll-container" style={{ marginLeft: `calc((100vw - ${width}px) / 2)` }}>
          {slides.map((item, i) => (
            <div
              key={i}
              className={`task-steps__item-container ${
                activeSlideIndex === 1 ? 'task-steps__item-container--moved' : ``
              }`}
              style={{
                transform: activeSlideIndex === 1 && `translateX(calc(-${width}px - calc(100vw / 12)))`,
                pointerEvents: activeSlideIndex !== i && `none`
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </SliderContext.Provider>
  )
})
