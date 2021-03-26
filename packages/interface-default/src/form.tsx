import React, { useCallback, useMemo } from 'react'
import { Form } from 'react-final-form'
import clsx from 'clsx'
import {
  DecisionsFormProps,
  IntegrationConfigOptions,
} from '@consent-manager/core'

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

  return (
    <Form
      onSubmit={onSubmitCb}
      initialValues={initial}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <SubmitButton className={clsx(styles.submitButton)}>
            Close and save
          </SubmitButton>
          <h2>Website Settings</h2>
          <p>Some features are disabled by default to protect your privacy:</p>
          {integrations.map((integration: IntegrationConfigOptions) => (
            <Integration
              styles={styles}
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
  )
}
