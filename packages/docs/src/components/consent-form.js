import React, { useCallback, useMemo } from 'react'
import { Form, Field } from 'react-final-form'

export function ConsentForm({ integrations, initialValues, onSubmit }) {
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
          <h2>Available integrations</h2>
          {integrations.map(({ id, title }) => (
            <div key={id}>
              <label>{title}</label>
              <Field name={id} type="checkbox" component="input" />
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      )}
    />
  )
}
