import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import Button from '../shared/Button/';
import IconButton from '../shared/IconButton/';

import styles from './styles.scss';

const Start = () => {
  return (
    <>
      <Button variant="contained" color="primary" component={NavLink} to="/module/text-task">Text task</Button>
      <Button variant="contained" color="primary" component={NavLink} to="/module/video-task">Video task</Button>
    </>
  )
}

const TextTask = () => {
  return (
    <>
      <div>TextTask block</div>
      <Button variant="contained" color="primary" component={NavLink} to="/module">To start</Button>
    </>
  )
}

const VideoTask = () => {
  return (
    <>
      <div>VideoTask popup</div>
      <Button variant="contained" color="primary" component={NavLink} to="/module">To start</Button>
    </>
  )
}

export default function Module() {

    return (
        <div className="root">
            <div className="viewport">
                <div className="header">
                  <IconButton><MenuIcon /></IconButton>
                  <Button>История</Button>
                  <Button>Пропустить</Button>
                </div>
                <div className="sidenav">
                  <Avatar><EmojiEmotionsIcon /></Avatar>
                  <IconButton><NotificationsIcon /></IconButton>
                  <IconButton><ChatIcon /></IconButton>
                  <IconButton><SearchIcon /></IconButton>
                </div>
                <div className="content">
                  <Switch>
                    <Route exact path="/module" component={Start} />
                    <Route path="/module/text-task" component={TextTask} />
                    <Route path="/module/video-task" component={VideoTask} />
                  </Switch>
                </div>

            </div>
        </div>
    );
}
