import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat'
import SearchIcon from '@material-ui/icons/Search'

import './styles.scss'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core'

const CommonStyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    lineHeight: '18px',
    marginBottom: 6,
    fontWeight: 'normal',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#057DFF'
    },
    '&:active': {
      color: '#1A53BC'
    }
  }
})(IconButton)

const BadgeStyled = withStyles({
  badge: {
    color: 'white',
    backgroundColor: '#6200EE'
  }
})(Badge)

export default function SideNav() {
  return (
    <div className="sidenav">
      <Avatar style={{ marginBottom: 6 }}>
        <EmojiEmotionsIcon />
      </Avatar>
      <CommonStyledButton disableRipple>
        <BadgeStyled badgeContent={3}>
          <NotificationsIcon />
        </BadgeStyled>
      </CommonStyledButton>
      <CommonStyledButton disableRipple>
        <ChatIcon />
      </CommonStyledButton>
      <CommonStyledButton disableRipple>
        <SearchIcon />
      </CommonStyledButton>
    </div>
  )
}
