import React from 'react'
import { NavLink } from 'react-router-dom'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

import Header from '../shared/Header'
import videoCover from './assets/video-cover.png'
import bigModuleCover from './assets/big-module-cover.png'
import blockQuestion from './assets/block-question.png'

import './styles.scss'
import { TextCard, BigModuleCard, BlockQuestionCard, LikeCard, useStyles, VideoCard } from './materialStyles'

export default function Main() {
  const classes = useStyles()

  return (
    <>
      <Header showSkipButton />
      <div className="content">
        <div className="content__header-container header-container">
          <h1 className="header-container__welcome">Добро пожаловать в модуль</h1>
          <h2 className="header-container__module-name">Эпоха Возрождения</h2>
        </div>
        <div className="content__cards">
          <TextCard>
            <p className="card__text">
              Эпоха Возрождения — становление светской картины мира, гуманизма и научного мировоззрения.
            </p>
          </TextCard>
          <NavLink className={classes.link} to="/module/task/video">
            <VideoCard>
              <img className={classes.videoImage} src={videoCover} alt="Обложка видео" />
              <PlayArrowIcon className={classes.playIcon} />
            </VideoCard>
          </NavLink>
          <NavLink className={classes.link} to="/module/task/text">
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
        </div>
      </div>
    </>
  )
}
