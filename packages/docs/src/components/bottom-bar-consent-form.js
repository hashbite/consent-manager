import React, { useCallback, useMemo, useState } from 'react'
import { Form, Field } from 'react-final-form'
import clsx from 'clsx'
import { useConsentFormVisible } from '@techboi/consent-manager'

import { SwitchAdapter } from './form/switch'
import styles from './bottom-bar-consent-form.module.css'

export function BottomBarConsentForm({
  integrations,
  initialValues,
  onSubmit,
}) {
  const hasPendingDescisions = useConsentFormVisible()

  const [visible, setVisible] = useState(hasPendingDescisions)

  const onSubmitCb = useCallback(
    values => {
      const enabled = []
      for (const [key, value] of Object.entries(values)) {
        if (value) {
          enabled.push(key)
        }
      }
      setVisible(false)
      onSubmit({ enabled })
    },
    [onSubmit]
  )

  const initial = useMemo(() => {
    const initialState = {}
    for (const integration of integrations) {
      initialState[integration.id] = initialValues.enabled.includes(
        integration.id
      )
    }

    return initialState
  }, [integrations, initialValues])

  if (!visible) {
    return (
      <svg
        className={clsx(styles.toggle)}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setVisible(true)}
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <Form
      onSubmit={onSubmitCb}
      initialValues={initial}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={clsx(
            styles.wrapper,
            !hasPendingDescisions && styles.noDelay
          )}
        >
          <div className={clsx(styles.content)}>
            <h2>We respect your privacy!</h2>
            {integrations.map(({ id, Icon, title, contrastColor, color }) => (
              <div className={clsx(styles.formControl)} key={id}>
                <Field
                  name={id}
                  label={
                    <div
                      className={clsx(styles.integration)}
                      style={{ color: contrastColor, backgroundColor: color }}
                    >
                      <Icon className={clsx(styles.integrationIcon)} />
                      <span className={clsx(styles.integrationTitle)}>
                        {title}
                      </span>
                    </div>
                  }
                  component={SwitchAdapter}
                />
              </div>
            ))}

            <button
              type="submit"
              className="button button--primary button--block"
            >
              Save
            </button>
          </div>
        </form>
      )}
    />
  )
}
