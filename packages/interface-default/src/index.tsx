import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Form } from 'react-final-form'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import { FiChevronUp } from 'react-icons/fi'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { use100vh } from 'react-div-100vh'

import {
  DecisionsFormProps,
  IntegrationConfigOptions,
  useConsentFormVisible,
} from '@consent-manager/core'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import defaultStyles from './index.module.css'
import defaultAnimationStyles from './animation-slide.module.css'
import { Introduction } from './introduction'
import { Integration } from './integration'
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
  [key: string]: string
}

export interface UnobtrusiveConsentControlUIProps extends DecisionsFormProps {
  slideDuration: number
  renderBackdrop: boolean
  styles?: Styles
  animationStyles?: Styles
  ToggleButton?: React.ComponentType<ToggleButtonProps>
  ToggleIcon?: React.ComponentType<ToggleIconProps>
  Switch?: React.ComponentType<SwitchProps>
  SubmitButton?: React.ComponentType<SubmitButtonProps>
}

interface FormState {
  [key: string]: boolean
}

const DefaultSubmitButton: React.FC<SubmitButtonProps> = props => (
  <button {...props} />
)

export const UnobtrusiveConsentControlUI: React.FC<UnobtrusiveConsentControlUIProps> = ({
  integrations,
  initialValues,
  onSubmit,
  slideDuration = 700,
  renderBackdrop = true,
  styles = defaultStyles,
  ToggleIcon = FiChevronUp,
  ToggleButton = DefaultToggleButton,
  Switch = DefaultSwitch,
  SubmitButton = DefaultSubmitButton,
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

    if (target && showForm) {
      disableBodyScroll(target)
      target.scrollTo({ top: 0 })
    }

    if (target && !showForm) {
      enableBodyScroll(target)
    }

    return clearAllBodyScrollLocks
  }, [showForm, formContainerRef])

  // @todo calling onSubmit causes rerender
  const onSubmitCb = useCallback(
    values => {
      const enabled = []
      for (const [key, value] of Object.entries(values)) {
        if (value) {
          enabled.push(key)
        }
      }
      setShowForm(false)
      onSubmit({ enabled })
    },
    [onSubmit]
  )

  const initial = useMemo(() => {
    const initialState: FormState = {}
    for (const integration of integrations) {
      initialState[integration.id] = initialValues.enabled.includes(
        integration.id
      )
    }

    return initialState
  }, [integrations, initialValues])

  // Get 100vh on mobile browsers as well
  const viewportHeight = use100vh()

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
          className={clsx(styles.container, styles.pane)}
          style={{
            transitionDuration: `${slideDuration}ms`,
            maxHeight: `${viewportHeight}px`,
          }}
          ref={formContainerRef}
        >
          <div className={clsx(styles.content)}>
            <Form
              onSubmit={onSubmitCb}
              initialValues={initial}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <SubmitButton className={clsx(styles.submitButton)}>
                    Close and save
                  </SubmitButton>
                  <h2>Website Settings</h2>
                  <p>
                    Some features are disabled by default to protect your
                    privacy:
                  </p>
                  {integrations.map((integration: IntegrationConfigOptions) => (
                    <Integration
                      key={integration.id}
                      Switch={Switch}
                      {...integration}
                    />
                  ))}
                  <SubmitButton className={clsx(styles.submitButton)}>
                    Close and save
                  </SubmitButton>
                </form>
              )}
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
