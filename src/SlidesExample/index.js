import React, { useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './styles.scss'

const SECTION_URL = '/slides'

const slides = [
  {
    title: 'Понятие Ренессанса',
    level: '2.0',
    description:
      'Познакомься с видеоуроком из школы питона Каа на тему «Истоки эпохи Возрождения» и на основе его сюжета дай определение понятию «Ренессанс».',
    bg: 'orange'
  },
  {
    title: 'Что такое Ренессанс',
    level: '2.0',
    description: 'Познакомься с текстом «8 фактов о Ренессансе», размещённым на сайте «Академии Арзамас».',
    bg: 'purple'
  },
  {
    title: 'Мировоззрение Ренессанса',
    level: '2.0',
    description:
      'На основе текста учебников заполни пропуски в таблице, сопоставляющей мировоззрение средневекового человека и человека эпохи Ренессанса.',
    bg: 'green'
  },
  {
    title: 'Человек эпохи Возрождения',
    level: '2.0',
    description:
      'Прочитай несколько фрагментов из сочинений гуманистов, на их основе сформулируй основные черты мировоззрения человека эпохи Возрождения.',
    bg: 'yellow'
  }
]

export default function SlidesExample() {
  const history = useHistory()
  const params = useParams()
  const slider = useRef(null)

  const { taskId = 0, meta } = params

  const handleSlideClick = taskId => e => history.push(SECTION_URL + '/' + taskId)

  useEffect(() => {
    slider && slider.current && slider.current.slickGoTo(taskId)
  }, [taskId])

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '200px'
  }

  return (
    <div className="slick-container">
      <Slider ref={slider} {...settings}>
        {slides.map((slide, i) => (
          <div key={i} style={{ background: slide.bg }} onClick={handleSlideClick(i)}>
            <h3>{slide.title}</h3>
            <h4>{slide.level}</h4>
            <div style={{ backgroundColor: slide.bg }}>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
