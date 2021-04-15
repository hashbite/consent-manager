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
import { IconProps } from './interface'

export interface ConsentFormProps extends DecisionsFormProps {
  styles: Styles
  setShowForm: Function
  CloseIcon: React.ComponentType<IconProps>
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
  CloseIcon,
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

  const initialState = useMemo(() => {
    const initialState: FormState = {}
    for (const integration of integrations) {
      initialState[integration.id] = initialValues.enabled.includes(
        integration.id
      )
    }

    return initialState
  }, [integrations, initialValues])

  const onClose = useCallback(() => setShowForm(false), [setShowForm])

  return (
    <Form
      onSubmit={onSubmitCb}
      initialValues={initialState}
      render={({ handleSubmit, form }) => {
        const controls = (
          <div className={clsx(styles.formControls)}>
            <SubmitButton
              type="button"
              onClick={form.reset}
              className={clsx(styles.buttonReset, styles.button)}
            >
              <Trans id="consent-manager.form.reset" message="Reset" />
            </SubmitButton>
            <SubmitButton
              type="button"
              onClick={() =>
                form.batch(() => {
                  for (const id of Object.keys(initialState)) {
                    form.change(id, false)
                  }
                })
              }
              className={clsx(styles.buttonReset, styles.button)}
            >
              <Trans
                id="consent-manager.form.disableAll"
                message="Disable all"
              />
            </SubmitButton>
            <SubmitButton
              type="button"
              onClick={() =>
                form.batch(() => {
                  for (const id of Object.keys(initialState)) {
                    form.change(id, true)
                  }
                })
              }
              className={clsx(styles.buttonReset, styles.button)}
            >
              <Trans id="consent-manager.form.enableAll" message="Enable all" />
            </SubmitButton>
            <SubmitButton
              type="submit"
              className={clsx(
                styles.buttonReset,
                styles.button,
                styles.buttonPrimary
              )}
            >
              <Trans id="consent-manager.form.save" message="Close and save" />
            </SubmitButton>
          </div>
        )

        return (
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
            <Trans
              id="consent-manager.close"
              message="close"
              render={({ translation }) => (
                <button
                  className={clsx(
                    styles.buttonReset,
                    styles.buttonClose,
                    styles.formButtonClose
                  )}
                  onClick={onClose}
                  title={String(translation)}
                >
                  <CloseIcon className={clsx(styles.buttonCloseIcon)} />
                </button>
              )}
            />
          </form>
        )
      }}
    />
  )
}
