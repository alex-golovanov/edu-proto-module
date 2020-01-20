import React, { memo } from 'react'

import checkedImage from '../assets/radio-checked.png'
import uncheckedImage from '../assets/radio-unchecked.png'

import './styles.scss'

export default memo(function({ id, name, checked, labelText, onChange }) {
  return (
    <div className="radiobutton__container">
      <img alt="" src={checked ? checkedImage : uncheckedImage} width={24} height={24} className="radiobutton__image" />
      <input onChange={onChange} className="radiobutton__input" type="radio" checked={checked} id={id} name={name} />
      <label htmlFor={id} className="radiobutton__label">
        {labelText}
      </label>
    </div>
  )
})
