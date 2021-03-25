import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

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

export const Introduction: React.FC<IntroductionProps> = ({
  introductionFinished,
  styles = defaultStyles,
  animationStyles = defaultAnimationStyles,
  slideDuration,
  noActionDelay = 4000,
  visibleDuration = 6000,
}) => {
  const [show, setShow] = useState(false)

  // Wait for noActionDelay till we show the intro
  // @todo actually check for no user interaction with the page
  useEffect(() => {
    window.setTimeout(() => setShow(true), noActionDelay)
  }, [setShow, noActionDelay])

  return (
    <CSSTransition
      in={show}
      timeout={slideDuration}
      classNames={animationStyles}
      unmountOnExit
      onEntering={() => {
        window.setTimeout(() => {
          setShow(false)
        }, visibleDuration)
      }}
      onExited={() => introductionFinished()}
    >
      <div
        className={clsx(styles.pane)}
        style={{ transitionDuration: `${slideDuration}ms` }}
      >
        <div className={clsx(styles.introduction, styles.content)}>
          Some features got disabled in respect of your privacy.
        </div>
      </div>
    </CSSTransition>
  )
}
