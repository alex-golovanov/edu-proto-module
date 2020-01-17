import React from 'react'
import { GhostStyledButton, PrimaryStyledButton, CommonStyledButton } from './materialStyles'

const stylesMap = {
  ghost: GhostStyledButton,
  primary: PrimaryStyledButton
}

export default function StyledButton({ appearance, children, ...rest }) {
  const StyledButton = stylesMap[appearance] || CommonStyledButton

  return (
    <StyledButton disableRipple {...rest}>
      {children}
    </StyledButton>
  )
}
