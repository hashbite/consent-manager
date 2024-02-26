import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
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
  ToggleIcon: React.FC<IconProps>
  CloseIcon: React.FC<IconProps>
  Switch: React.FC<SwitchProps>
  Button: React.FC<ButtonProps>
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

  const initialState = useMemo(() => {
    const initialState: FormState = {}

    for (const integration of integrations) {
      initialState[integration.id] = initialValues.enabled.includes(
        integration.id
      )
    }

    return initialState
  }, [integrations])

  const defaultState = useMemo(() => {
    const defaultState: FormState = {}

    for (const integration of integrations) {
      defaultState[integration.id] = integration.enabledByDefault || false
    }

    return defaultState
  }, [integrations])

  const [formState, setFormState] = useState<FormState>(initialState)

  const cbOnSubmit = useCallback(() => {
    const enabled = []
    for (const [key, value] of Object.entries(formState)) {
      if (value) {
        enabled.push(key)
      }
    }
    setFormVisible(false)
    onSubmit({ enabled })
  }, [onSubmit, setFormVisible, formState])

  const cbReset = useCallback(
    () => setFormState({ ...defaultState }),
    [setFormState, defaultState]
  )

  const cbEnableAll = useCallback(() => {
    setFormState((state) => {
      Object.keys(state).forEach((key) => (state[key] = true))
      return { ...state }
    })
  }, [setFormState])

  const cbDisableAll = useCallback(() => {
    setFormState((state) => {
      Object.keys(state).forEach((key) => (state[key] = false))
      return { ...state }
    })
  }, [setFormState])

  const cbToggleIntegration = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setFormState((state) => ({
        ...state,
        [e.target.name]: !state[e.target.name],
      })),
    []
  )

  const cbOnClose = useCallback(() => setFormVisible(false), [setFormVisible])

  const controls = useMemo(
    () => (
      <div className={clsx(styles.formControls)}>
        <Button type="button" onClick={cbReset}>
          <Trans id="consent-manager.form.reset" />
        </Button>
        <Button type="button" onClick={cbDisableAll}>
          <Trans id="consent-manager.form.disable-all" />
        </Button>
        <Button type="button" onClick={cbEnableAll}>
          <Trans id="consent-manager.form.enable-all" />
        </Button>
        <Button type="submit" data-button-style="primary">
          <Trans id="consent-manager.form.save" />
        </Button>
      </div>
    ),
    []
  )

  return (
    <>
      <form onSubmit={cbOnSubmit}>
        <div className={clsx(styles.formIntro)}>
          <div className={clsx(styles.formContent)}>
            <h1 className={clsx(styles.formTitle)}>
              <ToggleIcon className={clsx(styles.icon, styles.formIcon)} />
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
                defaultChecked={formState[integration.id]}
                onChange={cbToggleIntegration}
                {...integration}
              />
            ))}
          </div>
        </div>
        {controls}
      </form>
      <Trans
        id="consent-manager.close"
        render={({ message }) => (
          <button
            className={clsx(
              styles.buttonReset,
              styles.buttonClose,
              styles.formButtonClose
            )}
            onClick={cbOnClose}
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
