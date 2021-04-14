import React, { useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import { FiChevronUp } from '@react-icons/all-files/fi/FiChevronUp'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { use100vh } from 'react-div-100vh'

import {
  DecisionsFormProps,
  useConsentFormVisible,
} from '@consent-manager/core'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import defaultStyles from './index.module.css'
import defaultAnimationStyles from './animation-slide.module.css'
import { Introduction } from './introduction'
import { ConsentForm as DefaultForm, ConsentFormProps } from './form'
import { Backdrop } from './backdrop'

import {
  ToggleButton as DefaultToggleButton,
  ToggleButtonProps,
} from './toggle-button'

export interface Styles {
  [key: string]: string
}

export interface ToggleIconProps {
  [key: string]: string
}

export interface SubmitButtonProps {
  [key: string]: unknown
}

export interface TransProps {
  id?: string
  [key: string]: unknown
}

export interface InterfaceDefaultProps extends DecisionsFormProps {
  slideDuration: number
  renderBackdrop: boolean
  styles?: Styles
  animationStyles?: Styles
  Trans?: React.ComponentType<TransProps>
  ToggleButton?: React.ComponentType<ToggleButtonProps>
  ToggleIcon?: React.ComponentType<ToggleIconProps>
  Switch?: React.ComponentType<SwitchProps>
  SubmitButton?: React.ComponentType<SubmitButtonProps>
  Form?: React.ComponentType<ConsentFormProps>
}

const DefaultSubmitButton: React.FC<SubmitButtonProps> = props => (
  <button {...props} />
)

const DefaultTrans: React.FC<TransProps> = ({ children }) => <>{children}</>

export const InterfaceDefault: React.FC<InterfaceDefaultProps> = ({
  integrations,
  initialValues,
  onSubmit,
  slideDuration = 700,
  renderBackdrop = true,
  styles = defaultStyles,
  Trans = DefaultTrans,
  ToggleIcon = FiChevronUp,
  ToggleButton = DefaultToggleButton,
  Switch = DefaultSwitch,
  SubmitButton = DefaultSubmitButton,
  Form = DefaultForm,
  animationStyles = defaultAnimationStyles,
}) => {
  const hasPendingDecisions = useConsentFormVisible()

  const [needsIntroduction, setNeedsIntroduction] = useState(
    hasPendingDecisions
  )

  const introductionFinished = useCallback(() => {
    setNeedsIntroduction(false)
  }, [setNeedsIntroduction])

  const [showForm, setShowForm] = useState(false)
  const formContainerRef = useRef<HTMLDivElement>(null)

  const toggleControlForm = useCallback(
    e => {
      e.preventDefault()
      setShowForm(v => !v)
    },
    [setShowForm]
  )

  // Freeze scroll when form is shown
  useEffect(() => {
    const target: HTMLDivElement | null = formContainerRef.current

    if (!target) {
      return
    }

    if (showForm) {
      disableBodyScroll(target)
      target.scrollTo({ top: 0 })
    }

    if (!showForm) {
      enableBodyScroll(target)
    }

    return clearAllBodyScrollLocks
  }, [showForm, formContainerRef])

  // Get 100vh on mobile browsers as well
  const viewportHeight = use100vh()

  const handleEsc = useCallback(
    e => {
      if (showForm && e.keyCode === 27) {
        e.preventDefault()
        setShowForm(false)
      }
    },
    [showForm]
  )

  // Allow close on ESC key
  useEffect(() => {
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  // Check if component was mounted for SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  // Do not render the interface on SSR.
  if (!isMounted) {
    return null
  }

  return (
    <div className={clsx(styles.wrapper)} id="consent-control-ui">
      {needsIntroduction && (
        <Introduction
          introductionFinished={introductionFinished}
          slideDuration={slideDuration}
          Trans={Trans}
        />
      )}
      {renderBackdrop && (
        <Backdrop
          show={showForm}
          fadeDuration={slideDuration}
          styles={styles}
        />
      )}
      <CSSTransition
        in={showForm}
        timeout={slideDuration}
        classNames={animationStyles}
        unmountOnExit
        mountOnEnter
      >
        <div
          className={clsx(styles.pane, styles.slide)}
          style={{
            transitionDuration: `${slideDuration}ms`,
          }}
        >
          <div
            className={clsx(styles.form)}
            style={{
              maxHeight: viewportHeight ? `${viewportHeight}px` : 'null',
            }}
            ref={formContainerRef}
          >
            <Form
              styles={styles}
              onSubmit={onSubmit}
              integrations={integrations}
              initialValues={initialValues}
              setShowForm={setShowForm}
              Switch={Switch}
              SubmitButton={SubmitButton}
              Trans={Trans}
            />
          </div>
        </div>
      </CSSTransition>
      <ToggleButton
        ToggleIcon={ToggleIcon}
        styles={styles}
        showForm={showForm}
        toggleControlForm={toggleControlForm}
      />
    </div>
  )
}

export { FallbackComponent } from './fallback-component'
