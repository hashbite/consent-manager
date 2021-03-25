import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import createActivityDetector from 'activity-detector-ssr'

import defaultStyles from './index.module.css'
import defaultAnimationStyles from './animation-slide.module.css'
import { Styles } from './index'

export interface IntroductionProps {
  introductionFinished: Function
  styles?: Styles
  animationStyles?: Styles
  slideDuration: number
  noActionDelay?: number
  visibleDuration?: number
}

interface ActivityDetector {
  on: Function
  stop: Function
}

export const Introduction: React.FC<IntroductionProps> = ({
  introductionFinished,
  styles = defaultStyles,
  animationStyles = defaultAnimationStyles,
  slideDuration,
  noActionDelay = 4000,
  visibleDuration = 6000,
}) => {
  const [show, setShow] = useState(false)
  const [isIdle, setIsIdle] = React.useState(false)
  const [activityDetectorInstance, setActivityDetector] = useState<
    ActivityDetector
  >()

  // Listen for user interaction
  React.useEffect(() => {
    const activityDetector: ActivityDetector = createActivityDetector({
      timeToIdle: noActionDelay,
      inactivityEvents: [],
    })
    activityDetector.on('idle', () => setIsIdle(true))
    activityDetector.on('active', () => setIsIdle(false))

    setActivityDetector(activityDetector)
    return () => activityDetector.stop()
  }, [noActionDelay, setActivityDetector])

  // As soon user is idle for the first time, show the intro and stop listening
  useEffect(() => {
    if (isIdle && activityDetectorInstance) {
      setShow(true)
      activityDetectorInstance.stop()
    }
  }, [isIdle, setShow, activityDetectorInstance])

  return (
    <CSSTransition
      in={show}
      timeout={slideDuration}
      classNames={animationStyles}
      mountOnEnter
      unmountOnExit
      onEntering={() => {
        window.setTimeout(() => {
          setShow(false)
        }, visibleDuration)
      }}
      onExited={() => introductionFinished()}
    >
      <div
        className={clsx(styles.pane, styles.slide)}
        style={{ transitionDuration: `${slideDuration}ms` }}
      >
        <div className={clsx(styles.introduction, styles.content)}>
          Some features got disabled in respect of your privacy.
        </div>
      </div>
    </CSSTransition>
  )
}
