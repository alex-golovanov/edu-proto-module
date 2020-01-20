import { MODULE_KEYS } from '../ModuleOverview/LevelsGraph/constants'

import levelTwo from '../shared/assets/level-2.svg'
import levelThree from '../shared/assets/level-3.svg'
import levelFour from '../shared/assets/level-4.svg'

export const moduleElementMap = {
  [MODULE_KEYS.three]: {
    sliderLeft: {
      image: levelTwo,
      to: `/module/element/${MODULE_KEYS.two}`
    },
    sliderRight: {
      image: levelFour,
      to: `/module/element/${MODULE_KEYS.four}`
    },
    levelImage: levelThree,
    description: 'Я могу сравнить мировоззрение людей различных эпох на примере Возрождения и Средневековья',
    recommendedItems: [
      'Возрождение — это раннее Новое время или позднее Средневековье?',
      'Наш век — век воистину золотой',
      'Образы эпохи Возрождения'
    ]
  },
  [MODULE_KEYS.four]: {
    sliderLeft: {
      image: levelThree,
      to: `/module/element/${MODULE_KEYS.three}`
    },
    levelImage: levelFour,
    taskTo: `/module/overview/step-final`,
    description: 'Я могу на конкретных примерах исследовать, как античность повлияла на эпоху Возрождения',
    recommendedItems: ['«Античность, этот забытый мир, вновь является Возрождению, как древняя сказочная птица Феникс»']
  }
}

export const levelTwoStagesData = {
  stage: [
    {
      title: 'I',
      check: false,
      cards: [
        {
          cardTitle: 'Понятие Ренессанса'
        },
        {
          cardTitle: 'Что такое Ренессанс'
        }
      ]
    },
    {
      title: 'II',
      check: false,
      cards: [
        {
          cardTitle: 'Мировоззрение Ренессанса'
        },
        {
          cardTitle: 'Человек эпохи Возрождения'
        }
      ]
    },
    {
      title: 'III',
      check: false,
      cards: [
        {
          cardTitle: 'Выдающиеся деятели эпохи Возрождения'
        }
      ]
    },
    {
      title: 'Проверочные',
      check: true,
      cards: [
        {
          cardTitle: 'Эпоха Возрождения',
          variant: 'Вариант I'
        },
        {
          cardTitle: 'Эпоха Возрождения',
          variant: 'Вариант II'
        }
      ]
    }
  ]
}
