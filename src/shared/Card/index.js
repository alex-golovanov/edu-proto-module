import React, { memo } from 'react'
import { withStyles } from '@material-ui/styles'

import styles from './styles.scss'

const defaultStyles = {
  root: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 15px 12px rgba(21, 0, 51, 0.11), 0 19px 38px rgba(21, 0, 51, 0.15)'
  }
}

export default memo(
  withStyles(defaultStyles)(function(props) {
    return <div className={props.classes.root}>{props.children}</div>
  })
)
