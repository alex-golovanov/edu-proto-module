import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import EmojiEmotionsIcon from '@material-ui/core/SvgIcon/SvgIcon'
import IconButton from 'src/shared/IconButton'

import styles from './styles.scss'

export default function SideNav() {
  return (
    <div className="sidenav">
      <Avatar>
        <EmojiEmotionsIcon />
      </Avatar>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  )
}
