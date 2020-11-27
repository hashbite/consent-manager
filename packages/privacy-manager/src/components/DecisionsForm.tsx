import React from 'react'
import { Field, Form } from 'react-final-form'
import { IntegrationName, IntegrationConfig } from '../config'

export interface DecisionsFormState {
  enabled: IntegrationName[]
}

interface DecisionsFormProps {
  integrations: IntegrationConfig[]
  intitialValues: DecisionsFormState
  onSubmit: (value: DecisionsFormState) => void
}
export const DecisionsForm: React.FC<DecisionsFormProps> = ({
  integrations,
  intitialValues,
  onSubmit
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={intitialValues}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            {integrations.map((i) => (
              <IntegrationEnablementComponent key={i.id} id={i.id} />
            ))}
            <button type='submit'>Submit</button>
          </form>
        )
      }}
    />
  )
}

const IntegrationEnablementComponent: React.FC<IntegrationConfig> = ({
  id
}) => {
  return (
    <label>
      <Field name='enabled' component='input' type='checkbox' value={id} /> {id}
    </label>
  )
}
