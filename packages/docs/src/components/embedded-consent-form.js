import React, { useCallback, useMemo } from 'react'
import { Form, Field } from 'react-final-form'
import clsx from 'clsx'

import { SwitchAdapter } from './form/switch'

export function EmbeddedConsentForm({ integrations, initialValues, onSubmit }) {
  const onSubmitCb = useCallback(
    values => {
      const enabled = []
      for (const [key, value] of Object.entries(values)) {
        if (value) {
          enabled.push(key)
        }
      }
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

  return (
    <Form
      onSubmit={onSubmitCb}
      initialValues={initial}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={clsx('card__body')}>
            <h2>Available integrations</h2>
            {integrations.map(({ id, title }) => (
              <Field
                key={id}
                name={id}
                label={title}
                component={SwitchAdapter}
              />
            ))}
          </div>

          <div className={clsx('card__footer')}>
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
