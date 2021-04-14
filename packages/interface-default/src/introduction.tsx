import React, { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import createActivityDetector from 'activity-detector-ssr'
import { Trans } from '@lingui/react'

import { useDecisions } from '@consent-manager/core'

import { Styles } from './index'
import defaultStyles from './index.module.css'
import defaultAnimationStyles from './animation-slide.module.css'

export interface IntroductionProps {
  introductionFinished: Function
  setShowForm: Function
  styles?: Styles
  animationStyles?: Styles
  slideDuration: number
  noActionDelay?: number
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
  setShowForm,
  noActionDelay = 100,
}) => {
  const [decisions, setAndStoreDecisions] = useDecisions()
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

  const onLearnMore = useCallback(
    e => {
      e.preventDefault()
      setShow(false)
      setShowForm(true)
    },
    [setShow, setShowForm]
  )

  const onEnableAll = useCallback(
    e => {
      e.preventDefault()
      setShow(false)
      for (const integrationId of Object.keys(decisions)) {
        decisions[integrationId] = true
      }
      setAndStoreDecisions(decisions)
    },
    [setShow, decisions, setAndStoreDecisions]
  )

  const onClose = useCallback(
    e => {
      e.preventDefault()
      setShow(false)
    },
    [setShow]
  )

  return (
    <CSSTransition
      in={show}
      timeout={slideDuration}
      classNames={animationStyles}
      mountOnEnter
      unmountOnExit
      onExited={() => introductionFinished()}
    >
      <section
        className={clsx(styles.pane, styles.slide)}
        style={{ transitionDuration: `${slideDuration}ms` }}
      >
        <div className={clsx(styles.introduction, styles.content)}>
          <h1 className={clsx(styles.headline)}>
            <Trans
              id="consent-manager.introduction.title"
              message="Data protection enabled."
            />
          </h1>
          <p className={clsx(styles.description)}>
            <Trans
              id="consent-manager.introduction.description"
              message="Some features were disabled to protect your privacy."
            />
          </p>
          <div className={clsx(styles.controls)}>
            <button className={clsx(styles.button)} onClick={onLearnMore}>
              <Trans
                id="consent-manager.introduction.learn-more"
                message="Learn more"
              />
            </button>
            <button className={clsx(styles.button)} onClick={onEnableAll}>
              <Trans
                id="consent-manager.introduction.enable-all"
                message="Enable all features"
              />
            </button>
          </div>
          <Trans
            id="consent-manager.introduction.close"
            message="close"
            render={({ translation }) => (
              <button
                className={clsx(styles.close)}
                onClick={onClose}
                title={String(translation)}
              >
                x
              </button>
            )}
          />
        </div>
      </section>
    </CSSTransition>
  )
}
