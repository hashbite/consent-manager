import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Form, Field } from 'react-final-form'
import clsx from 'clsx'
import {
  useConsentFormVisible,
  DecisionsFormProps,
  IntegrationConfigOptions,
} from '@techboi/consent-manager'
import { FiChevronUp } from 'react-icons/fi'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import defaultStyles from './index.module.css'

export interface UnobtrusiveConsentControlUIProps extends DecisionsFormProps {
  introductionNoActionDelay: number
  introductionTransitionDuration: number
  introductionVisibleDuration: number
  styles: { [key: string]: string }
  ToggleIcon: React.ComponentType
  Switch: React.ComponentType<SwitchProps>
  Button: React.ComponentType
}

interface FormState {
  [key: string]: boolean
}

export const UnobtrusiveConsentControlUI: React.FC<UnobtrusiveConsentControlUIProps> = ({
  integrations,
  initialValues,
  onSubmit,
  introductionNoActionDelay = 2000,
  introductionTransitionDuration = 1000,
  introductionVisibleDuration = 4000,
  styles = defaultStyles,
  ToggleIcon = FiChevronUp,
  Switch = DefaultSwitch,
  Button = props => <button {...props} />,
}) => {
  const hasPendingDescisions = useConsentFormVisible()
  const [showIntroduction, setShowIntroduction] = useState(false)

  const [needsIntroduction, setNeedsIntroduction] = useState(
    hasPendingDescisions
  )
  const [slideUp, setSlideUp] = useState(false)

  const toggleControlForm = useCallback(
    e => {
      e.preventDefault()
      setShowIntroduction(false)
      setSlideUp(v => !v)
    },
    [setSlideUp, setShowIntroduction]
  )

  // @todo calling onSubmit causes rerender
  const onSubmitCb = useCallback(
    values => {
      const enabled = []
      for (const [key, value] of Object.entries(values)) {
        if (value) {
          enabled.push(key)
        }
      }
      setSlideUp(false)
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

  // Check if component was mounted for SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  // Introduction animation
  useEffect(() => {
    if (!isMounted || !needsIntroduction) {
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
        }, introductionTransitionDuration)
      }, introductionVisibleDuration)
    }, introductionNoActionDelay)
  }, [
    isMounted,
    setShowIntroduction,
    needsIntroduction,
    introductionNoActionDelay,
    introductionVisibleDuration,
    introductionTransitionDuration,
  ])

  // Do not render the interface on SSR.
  if (!isMounted) {
    return null
  }

  return (
    <div
      className={clsx(
        styles.wrapper,
        styles.pane,
        styles.slide,
        slideUp && styles.slideUp
      )}
      style={{
        transitionDuration: `${introductionTransitionDuration}ms`,
      }}
      id="consent-control-ui"
    >
      <button
        className={clsx(styles.toggleButton)}
        title={`Toggle website settings visibility`}
        onClick={toggleControlForm}
      >
        <div className={clsx(styles.pane, styles.toggleButtonContent)}>
          <ToggleIcon className={clsx(slideUp && styles.inverted)} />
        </div>
      </button>
      {showIntroduction ? (
        <div className={clsx(styles.introduction)}>
          Some features got disabled in respect of your privacy.
          <br /> Click here to learn more!
        </div>
      ) : (
        <Form
          onSubmit={onSubmitCb}
          initialValues={initial}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={clsx(styles.content)}>
                <h2>Website Settings</h2>
                <p>
                  Some features are disabled by default to protect your privacy:
                </p>
                {integrations.map(
                  ({
                    id,
                    Icon,
                    title,
                    contrastColor,
                    color,
                    description,
                    privacyPolicyUrl,
                  }: IntegrationConfigOptions) => (
                    <div className={clsx(styles.formControl)} key={id}>
                      <Field name={id} component={Switch}>
                        <div
                          className={clsx(styles.integration)}
                          style={{
                            color: contrastColor,
                            backgroundColor: color,
                          }}
                        >
                          <Icon className={clsx(styles.integrationIcon)} />
                          <span className={clsx(styles.integrationTitle)}>
                            {title}
                          </span>
                        </div>
                      </Field>
                      <p className={clsx(styles.integrationDescription)}>
                        {description}
                        <br />
                        <a
                          href={privacyPolicyUrl}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Learn more about the privacy policy of {title}
                        </a>
                      </p>
                    </div>
                  )
                )}
                <Button>Save</Button>
              </div>
            </form>
          )}
        />
      )}
    </div>
  )
}
