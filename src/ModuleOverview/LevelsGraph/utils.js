import levelTwo from '../../shared/assets/level-2.svg'
import levelTwoFilled from '../../shared/assets/level-2-filled.svg'
import levelThreeFilled from '../../shared/assets/level-3-filled.svg'
import levelThree from '../../shared/assets/level-3.svg'
import levelFour from '../../shared/assets/level-4.svg'
import { MODULE_KEYS, MODULE_ROUTES } from './constants'

export function getLevelsMap({ secondRef, fourthRef }) {
  return new Map([
    [
      MODULE_KEYS.two,
      {
        ref: secondRef,
        image: levelTwo,
        imageFilled: levelTwoFilled,
        description: 'Я могу назвать и характеризовать основные периоды эпохи Возрождения',
        to: MODULE_ROUTES[MODULE_KEYS.two],
        style: {
          left: 0
        }
      }
    ],
    [
      MODULE_KEYS.three,
      {
        image: levelThree,
        imageFilled: levelThreeFilled,
        description: 'Я могу сравнить мировоззрение людей различных эпох на примере Возрождения и Средневековья',
        to: MODULE_ROUTES[MODULE_KEYS.three],
        style: {
          left: '50%',
          transform: 'translateX(-50%)'
        }
      }
    ],
    [
      MODULE_KEYS.four,
      {
        ref: fourthRef,
        image: levelFour,
        description: 'Я могу на конкретных примерах исследовать, как античность повлияла на эпоху Возрождения',
        to: MODULE_ROUTES[MODULE_KEYS.four],
        style: {
          right: 0,
          width: 280,
          height: 302,
          padding: 20,
          top: -30
        }
      }
    ]
  ])
}
//  TODO: добавить позже, когда будет роутинг на четвертый финальный этап
/**
 [
 MODULE_KEYS.fourFinal,
 {
        ref: fourthRef,
        image: levelFour,
        description: 'Я могу назвать и характеризовать основные периоды эпохи Возрождения',
        to: MODULE_ROUTES[MODULE_KEYS.fourFinal],
        style: {
          right: 0
        }
 ]
 **/
