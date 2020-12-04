import React, { useCallback } from 'react'
import useSet from 'react-use/esm/useSet'
import { IntegrationName, IntegrationConfig } from '../config'

export interface DecisionsFormState {
  enabled: IntegrationName[]
}

export interface DecisionsFormProps {
  integrations: IntegrationConfig[]
  initialValues: DecisionsFormState
  onSubmit: (value: DecisionsFormState) => void
}

export const DecisionsForm: React.FC<DecisionsFormProps> = ({
  integrations,
  initialValues,
  onSubmit
}) => {
  const [set, { toggle, has }] = useSet(new Set(initialValues.enabled))

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const integrationId = e.target.value
    toggle(integrationId)
  }, [toggle])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const enabled = Array.from(set.values())
    onSubmit({ enabled })
  }, [set])

  return (
    <form onSubmit={handleSubmit}>
      {integrations.map(({ id }) => (
        <label key={id}>
          <input
            name='enabled'
            type='checkbox'
            value={id}
            onChange={handleChange}
            checked={has(id)}
          />{' '}
          {id}
        </label>
      ))}
      <button type='submit'>Submit</button>
    </form>
  )
}
