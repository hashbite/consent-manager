import React, { useCallback, useMemo } from 'react'
import { Form } from 'react-final-form'
import clsx from 'clsx'
import {
  DecisionsFormProps,
  IntegrationConfigOptions,
} from '@consent-manager/core'
import { Trans } from '@lingui/react'

import defaultStyles from './index.module.css'
import { Switch as DefaultSwitch, SwitchProps } from './switch'
import { Integration } from './integration'
import { Styles, SubmitButtonProps } from './index'

export interface ConsentFormProps extends DecisionsFormProps {
  styles: Styles
  setShowForm: Function
  Switch?: React.ComponentType<SwitchProps>
  SubmitButton?: React.ComponentType<SubmitButtonProps>
}

interface FormState {
  [key: string]: boolean
}

const DefaultSubmitButton: React.FC<SubmitButtonProps> = props => (
  <button {...props} />
)

export const ConsentForm: React.FC<ConsentFormProps> = ({
  integrations,
  initialValues,
  onSubmit,
  setShowForm,
  styles = defaultStyles,
  Switch = DefaultSwitch,
  SubmitButton = DefaultSubmitButton,
}) => {
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
    [onSubmit, setShowForm]
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

  const controls = (
    <div className={clsx(styles.formControls)}>
      <SubmitButton
        className={clsx(
          styles.introductionButtonReset,
          styles.introductionButton,
          styles.introductionButtonPrimary
        )}
      >
        <Trans id="consent-manager.form.button" message="Close and save" />
      </SubmitButton>
    </div>
  )

  return (
    <Form
      onSubmit={onSubmitCb}
      initialValues={initial}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={clsx(styles.formIntro)}>
            <div className={clsx(styles.formContent)}>
              <h1 className={clsx(styles.formTitle)}>
                <Trans
                  id="consent-manager.form.headline"
                  message="Website Features and Cookies"
                />
              </h1>
              <Trans
                id="consent-manager.form.description"
                message="<0>Some features are disabled by default Third Party Services are disabled to protect your privacy.</0><1>To fully experience this website enable the following features:</1>"
                components={[<p />, <p />, <p />, <p />, <p />]}
              />
            </div>
          </div>
          {controls}
          <div className={clsx(styles.formIntegrations)}>
            <div className={clsx(styles.formContent)}>
              {integrations.map((integration: IntegrationConfigOptions) => (
                <Integration
                  styles={styles}
                  key={integration.id}
                  Switch={Switch}
                  {...integration}
                />
              ))}
            </div>
          </div>
          {controls}
        </form>
      )}
    />
  )
}
