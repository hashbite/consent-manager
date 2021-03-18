import React, { useCallback } from 'react'
import { useConfig } from '../context'
import { useEnabledIntegrations } from '../integrations'
import {
  DecisionsForm as DefaultDecisionsForm,
  DecisionsFormProps,
  DecisionsFormState,
} from './DecisionsForm'

export const ConsentManagerForm: React.FC<{
  formComponent?: React.ComponentType<DecisionsFormProps>
}> = ({ formComponent, ...props }) => {
  const [enabledIntegrations, setEnabledIntegrations] = useEnabledIntegrations()
  const { integrations } = useConfig()
  const DecisionsForm = formComponent || DefaultDecisionsForm

  const handleFormSubmit = useCallback(
    (values: DecisionsFormState) => {
      setEnabledIntegrations(() => values.enabled)
    },
    [setEnabledIntegrations]
  )

  return (
    <DecisionsForm
      integrations={integrations}
      initialValues={{ enabled: enabledIntegrations }}
      onSubmit={handleFormSubmit}
      {...props}
    />
  )
}
