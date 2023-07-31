import React, { ChangeEvent, useCallback, useContext, useMemo } from 'react'
import { Form } from 'react-final-form'
import clsx from 'clsx'
import {
  DecisionsFormProps,
  IntegrationConfigOptions,
} from '@consent-manager/core'
import { Trans } from './trans'

import { Integration } from './integration'
import { Styles, ButtonProps, IconProps, SwitchProps } from './index'
import { ConsentManagerDefaultInterfaceContext } from './context'

export interface ConsentFormProps extends DecisionsFormProps {
  styles: Styles
  ToggleIcon: React.ComponentType<IconProps>
  CloseIcon: React.ComponentType<IconProps>
  Switch: React.ComponentType<SwitchProps>
  Button: React.ComponentType<ButtonProps>
}

interface FormState {
  [key: string]: boolean
}

const ConsentForm: React.FC<ConsentFormProps> = ({
  integrations,
  initialValues,
  onSubmit,
  CloseIcon,
  ToggleIcon,
  styles,
  Switch,
  Button,
}) => {
  const { setFormVisible } = useContext(ConsentManagerDefaultInterfaceContext)

  const onSubmitCb = useCallback(
    (values: ChangeEvent<HTMLFormElement>) => {
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
              <Button type="button" onClick={form.reset}>
                <Trans id="consent-manager.form.reset" />
              </Button>
              <Button
                type="button"
                onClick={() =>
                  form.batch(() => {
                    for (const id of Object.keys(initialState)) {
                      form.change(
                        id as keyof ChangeEvent<HTMLFormElement>,
                        false
                      )
                    }
                  })
                }
              >
                <Trans id="consent-manager.form.disable-all" />
              </Button>
              <Button
                type="button"
                onClick={() =>
                  form.batch(() => {
                    for (const id of Object.keys(initialState)) {
                      form.change(
                        id as keyof ChangeEvent<HTMLFormElement>,
                        true
                      )
                    }
                  })
                }
              >
                <Trans id="consent-manager.form.enable-all" />
              </Button>
              <Button type="submit" data-button-style="primary">
                <Trans id="consent-manager.form.save" />
              </Button>
            </div>
          )

          return (
            <form onSubmit={handleSubmit}>
              <div className={clsx(styles.formIntro)}>
                <div className={clsx(styles.formContent)}>
                  <h1 className={clsx(styles.formTitle)}>
                    <ToggleIcon
                      className={clsx(styles.icon, styles.formIcon)}
                    />
                    <Trans id="consent-manager.form.headline" />
                  </h1>
                  <Trans id="consent-manager.form.description" />
                </div>
              </div>
              {controls}
              <div className={clsx(styles.formIntegrations)}>
                <div className={clsx(styles.formIntegrationsList)}>
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
        render={({ message }) => (
          <button
            className={clsx(
              styles.buttonReset,
              styles.buttonClose,
              styles.formButtonClose
            )}
            onClick={onClose}
            title={message}
          >
            <CloseIcon className={clsx(styles.buttonCloseIcon)} />
          </button>
        )}
      />
    </>
  )
}

export default ConsentForm
