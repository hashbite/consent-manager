import React, { useCallback, useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import createActivityDetector from 'activity-detector-ssr'
import { Trans } from '@lingui/react'

import { useDecisions } from '@consent-manager/core'

import { Styles, IconProps } from './index'
import defaultStyles from './index.module.css'
import defaultAnimationStyles from './animation-slide.module.css'
import { ConsentManagerDefaultInterfaceContext } from './context'

export interface IntroductionProps {
  CloseIcon: React.ComponentType<IconProps>
  introductionFinished: Function
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
  CloseIcon,
  introductionFinished,
  styles = defaultStyles,
  animationStyles = defaultAnimationStyles,
  slideDuration,
  noActionDelay = 4000,
}) => {
  const { setFormVisible } = useContext(ConsentManagerDefaultInterfaceContext)
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
      setFormVisible(true)
    },
    [setShow, setFormVisible]
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
        className={clsx(styles.introduction, styles.slide)}
        style={{ transitionDuration: `${slideDuration}ms` }}
      >
        <div className={clsx(styles.introductionShape)} />
        <div className={clsx(styles.introductionContent)}>
          <h1 className={clsx(styles.introductionTitle)}>
            <Trans
              id="consent-manager.introduction.title"
              message="Data protection enabled"
            />
          </h1>
          <p className={clsx(styles.introductionDescription)}>
            <Trans
              id="consent-manager.introduction.description"
              message="Some website features are disabled to protect your privacy."
            />
          </p>
          <div className={clsx(styles.introductionControls)}>
            <button
              className={clsx(styles.buttonReset, styles.button)}
              onClick={onLearnMore}
            >
              <Trans
                id="consent-manager.introduction.learn-more"
                message="Learn more"
              />
            </button>
            <button
              className={clsx(
                styles.buttonReset,
                styles.button,
                styles.buttonPrimary
              )}
              onClick={onEnableAll}
            >
              <Trans
                id="consent-manager.introduction.enable-all"
                message="Enable all features"
              />
            </button>
          </div>
          <Trans
            id="consent-manager.close"
            message="close"
            render={({ translation }) => (
              <button
                className={clsx(
                  styles.buttonReset,
                  styles.buttonClose,
                  styles.buttonClose
                )}
                onClick={onClose}
                title={String(translation)}
              >
                <CloseIcon className={clsx(styles.buttonCloseIcon)} />
              </button>
            )}
          />
        </div>
      </section>
    </CSSTransition>
  )
}
