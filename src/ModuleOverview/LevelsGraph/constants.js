export const MODULE_KEYS = {
  two: 'two',
  three: 'three',
  four: 'four',
  fourFinal: 'fourFinal'
}

export const MODULE_ROUTES = {
  [MODULE_KEYS.two]: '/module/overview',
  [MODULE_KEYS.three]: '/module/overview/step-3',
  [MODULE_KEYS.four]: '/module/overview/step-4',
  [MODULE_KEYS.fourFinal]: '/module/overview/step-final'
}

export const MODULE_ROUTES_ELEMENTS = {
  [MODULE_KEYS.two]: '/module/element/two',
  [MODULE_KEYS.three]: '/module/element/three',
  [MODULE_KEYS.four]: '/module/element/four',
  [MODULE_KEYS.fourFinal]: '/module/overview/step-final'
}

export const MODULE_ROUTES_INVERSED = {
  [MODULE_ROUTES[MODULE_KEYS.two]]: MODULE_KEYS.two,
  [MODULE_ROUTES[MODULE_KEYS.three]]: MODULE_KEYS.three,
  [MODULE_ROUTES[MODULE_KEYS.four]]: MODULE_KEYS.four,
  [MODULE_ROUTES[MODULE_KEYS.fourFinal]]: MODULE_KEYS.fourFinal
}
