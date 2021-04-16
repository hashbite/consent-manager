import React, { useCallback, useContext, useMemo } from 'react'
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
import { Styles, ButtonProps } from './index'
import { IconProps } from './interface'
import { ConsentManagerDefaultInterfaceContext } from './context'

export interface ConsentFormProps extends DecisionsFormProps {
  styles: Styles
  CloseIcon: React.ComponentType<IconProps>
  Switch?: React.ComponentType<SwitchProps>
  SubmitButton?: React.ComponentType<ButtonProps>
}

interface FormState {
  [key: string]: boolean
}

const DefaultSubmitButton: React.FC<ButtonProps> = props => (
  <button {...props} />
)

export const ConsentForm: React.FC<ConsentFormProps> = ({
  integrations,
  initialValues,
  onSubmit,
  CloseIcon,
  styles = defaultStyles,
  Switch = DefaultSwitch,
  SubmitButton = DefaultSubmitButton,
}) => {
  const { setFormVisible } = useContext(ConsentManagerDefaultInterfaceContext)

  const onSubmitCb = useCallback(
    values => {
      const enabled = []
      for (const [key, value] of Object.entries(values)) {
        if (value) {
          enabled.push(key)
        }
      }
      setFormVisible(false)
      onSubmit({ enabled })
    },
    [onSubmit, setFormVisible]
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

  const onClose = useCallback(() => setFormVisible(false), [setFormVisible])

  return (
    <>
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
                  id="consent-manager.form.disable-all"
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
                <Trans
                  id="consent-manager.form.enable-all"
                  message="Enable all"
                />
              </SubmitButton>
              <SubmitButton
                type="submit"
                className={clsx(
                  styles.buttonReset,
                  styles.button,
                  styles.buttonPrimary
                )}
              >
                <Trans
                  id="consent-manager.form.save"
                  message="Save and close"
                />
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
            </form>
          )
        }}
      />
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
    </>
  )
}
