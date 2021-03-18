import React from 'react'
import clsx from 'clsx'
import Anime from 'react-anime'

import defaultStyles from './index.module.css'

export interface IntroductionProps {
  introductionFinished: Function
  styles?: { [key: string]: string }
  slideDuration: number
  noActionDelay?: number
  visibleDuration?: number
}

export const Introduction: React.FC<IntroductionProps> = ({
  introductionFinished,
  styles = defaultStyles,
  slideDuration,
  noActionDelay = 2000,
  visibleDuration = 4000,
}) => {
  return (
    <Anime
      // @todo actually listen for scroll & mouse move events
      delay={noActionDelay}
      translateY={[
        { value: '10%', delay: 0 },
        {
          value: '-100%',
          duration: slideDuration,
          delay: 0,
          easing: 'easeInOutQuad',
        },
        { value: '-100%', delay: 0, duration: visibleDuration },
        {
          value: '10%',
          duration: slideDuration,
          delay: 0,
          easing: 'easeInOutQuad',
        },
      ]}
      complete={() => {
        introductionFinished()
      }}
    >
      <div className={clsx(styles.pane)}>
        <div className={clsx(styles.introduction, styles.content)}>
          Some features got disabled in respect of your privacy.
        </div>
      </div>
    </Anime>
  )
}
