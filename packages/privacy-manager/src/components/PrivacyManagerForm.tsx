import React, { useCallback } from 'react'
import { PrivacyManagerDecisions } from '../config'
import { useConfig } from '../context'
import { useEnabledIntegrations } from '../integrations'
import { DecisionsForm, DecisionsFormState } from './DecisionsForm'

export const PrivacyManagerForm: React.FC<{
  onSubmit?: (decisions: PrivacyManagerDecisions) => void
}> = () => {
  const [enabledIntegrations, setEnabledIntegrations] = useEnabledIntegrations()
  const { integrations } = useConfig()

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
    />
  )
}
