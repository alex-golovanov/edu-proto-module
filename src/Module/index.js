import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import styles from './styles.scss'
import Button from '../shared/Button'
import Header from '../shared/Header'
import Card from '../shared/Card'
import videoCover from './assets/video-cover.png'
import bigModuleCover from './assets/big-module-cover.png'
import blockQuestion from './assets/block-question.png'

import { TextCard, BigModuleCard, BlockQuestionCard, LikeCard, useStyles, VideoCard } from './materialStyles/styles'

const Start = () => {
  const classes = useStyles()

  return (
    <>
      <TextCard>
        <p className="card__text">
          Эпоха Возрождения — становление светской картины мира, гуманизма и научного мировоззрения.
        </p>
      </TextCard>
      <NavLink to="/module/video-task">
        <VideoCard>
          <img className={classes.videoImage} src={videoCover} alt="Обложка видео" />
          <PlayArrowIcon className={classes.playIcon} />
        </VideoCard>
      </NavLink>
      <NavLink to="/module/text-task">
        <BigModuleCard>
          <img src={bigModuleCover} className={classes.bigModuleCover} alt="" />
        </BigModuleCard>
      </NavLink>
      <BlockQuestionCard>
        <img className={classes.questionImage} src={blockQuestion} alt="" />
      </BlockQuestionCard>
      <LikeCard>
        <span className="card__label">48</span>
        <ThumbUpIcon className={classes.thumbUpIcon} />
      </LikeCard>
    </>
  )
}

const TextTask = () => {
  return (
    <>
      <div>TextTask block</div>
      <Button variant="contained" color="primary" component={NavLink} to="/module">
        To start
      </Button>
    </>
  )
}

const VideoTask = () => {
  return (
    <>
      <div>VideoTask popup</div>
      <Button variant="contained" color="primary" component={NavLink} to="/module">
        To start
      </Button>
    </>
  )
}

export default function Module() {
  return (
    <div className="container">
      <div className="overlay" />
      <Header />
      <div className="viewport">
        <div className="content">
          <div className="content__header-container header-container">
            <h1 className="header-container__welcome">Добро пожаловать в модуль</h1>
            <h2 className="header-container__module-name">Эпоха Возрождения</h2>
          </div>
          <div className="content__cards">
            <Switch>
              <Route exact path="/module" component={Start} />
              <Route path="/module/text-task" component={TextTask} />
              <Route path="/module/video-task" component={VideoTask} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}
