import { Dispatch, SetStateAction, useMemo, useCallback } from 'react'
import { IntegrationName, PrivacyManagerDecisions } from './config'
import { useIntegrations } from './context'
import { useDecisions } from './decisions'

export function useEnabledIntegrations(): [
  IntegrationName[],
  Dispatch<SetStateAction<IntegrationName[]>>
] {
  const integrations = useIntegrations()
  const [decisions, setDecisions] = useDecisions()

  const enabledIntegrations = useMemo(
    () =>
      integrations
        .filter(({ id }) => Boolean(decisions[id]))
        .map(({ id }) => id),
    [integrations, decisions]
  )

  const setEnabled = useCallback(
    (newState: SetStateAction<IntegrationName[]>) => {
      const nextEnabledIntegrations =
        typeof newState === 'function'
          ? newState(enabledIntegrations)
          : newState

      const decisions: PrivacyManagerDecisions = {}

      for (const integration of integrations) {
        const enabled = nextEnabledIntegrations.includes(integration.id)
        decisions[integration.id] = enabled
      }

      setDecisions(decisions)
    },
    [enabledIntegrations, integrations, setDecisions]
  )

  return [enabledIntegrations, setEnabled]
}
