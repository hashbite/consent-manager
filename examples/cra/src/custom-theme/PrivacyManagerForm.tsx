import React, { useCallback } from "react"
import {PrivacyManagerDecisions, DecisionsFormState, useEnabledIntegrations, useIntegrations} from '@techboi/privacy-manager'

import { DecisionsForm } from "./DecisionsForm"

export const PrivacyManagerForm: React.FC<{
  onSubmit?: (decisions: PrivacyManagerDecisions) => void
}> = () => {
  const [enabledIntegrations, setEnabledIntegrations] = useEnabledIntegrations()
  const integrations = useIntegrations()

  const handleFormSubmit = useCallback(
    (values: DecisionsFormState) => {
      setEnabledIntegrations(() => values.enabled)
    },
    [setEnabledIntegrations]
  )

  return (
    <DecisionsForm
      integrations={integrations}
      intitialValues={{ enabled: enabledIntegrations }}
      onSubmit={handleFormSubmit}
    />
  )
}
