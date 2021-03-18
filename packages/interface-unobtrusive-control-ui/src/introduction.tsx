import React, { useEffect } from 'react'
import clsx from 'clsx'

import defaultStyles from './index.module.css'

export interface IntroductionProps {
  needsIntroduction: boolean
  setNeedsIntroduction: Function
  setSlideUp: Function
  styles?: { [key: string]: string }
  slideDuration: number
  noActionDelay?: number
  visibleDuration?: number
}

export const Introduction: React.FC<IntroductionProps> = ({
  needsIntroduction,
  setNeedsIntroduction,
  setSlideUp,
  styles = defaultStyles,
  slideDuration,
  noActionDelay = 2000,
  visibleDuration = 4000,
}) => {
  // Introduction animation
  // @todo use leightweight animation lib instead of this window timeout madness
  useEffect(() => {
    if (!needsIntroduction) {
      return
    }

    // Wait for no user interaction
    // @todo actually check it
    window.setTimeout(() => {
      setSlideUp(true)

      // Keep it visible to the user
      window.setTimeout(() => {
        setSlideUp(false)

        // Wait with swapping contentn till slide down is finished
        window.setTimeout(() => {
          setNeedsIntroduction(false)
        }, slideDuration)
      }, slideDuration + visibleDuration)
    }, noActionDelay)
  }, [
    setSlideUp,
    needsIntroduction,
    noActionDelay,
    visibleDuration,
    setNeedsIntroduction,
    slideDuration,
  ])

  if (!needsIntroduction) {
    return null
  }

  return (
    <div className={clsx(styles.introduction)}>
      Some features got disabled in respect of your privacy.
      <br /> Click here to learn more!
    </div>
  )
}
