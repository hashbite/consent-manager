import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useConsentFormVisible } from '@techboi/consent-manager'

import defaultStyles from './index.module.css'

export interface IntroductionProps {
  setShowIntroduction: Function
  setSlideUp: Function
  styles?: { [key: string]: string }
  noActionDelay?: number
  transitionDuration?: number
  visibleDuration?: number
}

export const Introduction: React.FC<IntroductionProps> = ({
  setShowIntroduction,
  setSlideUp,
  styles = defaultStyles,
  noActionDelay = 2000,
  transitionDuration = 1000,
  visibleDuration = 4000,
}) => {
  const hasPendingDescisions = useConsentFormVisible()

  const [needsIntroduction, setNeedsIntroduction] = useState(
    hasPendingDescisions
  )

  // Introduction animation
  useEffect(() => {
    if (!needsIntroduction) {
      return
    }
    setShowIntroduction(true)
    setNeedsIntroduction(false)

    // Wait for no user interaction
    // @todo actually check it
    window.setTimeout(() => {
      setSlideUp(true)

      // Keep it visible to the user
      window.setTimeout(() => {
        setSlideUp(false)

        // Wait with swapping contentn till slide down is finished
        window.setTimeout(() => {
          setShowIntroduction(false)
        }, transitionDuration)
      }, visibleDuration)
    }, noActionDelay)
  }, [
    setSlideUp,
    setShowIntroduction,
    needsIntroduction,
    noActionDelay,
    visibleDuration,
    transitionDuration,
  ])

  return (
    <div className={clsx(styles.introduction)}>
      Some features got disabled in respect of your privacy.
      <br /> Click here to learn more!
    </div>
  )
}
