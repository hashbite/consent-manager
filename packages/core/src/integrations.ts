import { Dispatch, SetStateAction, useMemo, useCallback } from 'react'
import {
  IntegrationConfig,
  IntegrationId,
  ConsentManagerDecisions,
} from './config'
import { useIntegrations } from './context'
import { useDecisions } from './decisions'

export function useEnabledIntegrations(): [
  IntegrationId[],
  Dispatch<SetStateAction<IntegrationId[]>>,
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
    (newState: SetStateAction<IntegrationId[]>) => {
      const nextEnabledIntegrations =
        typeof newState === 'function'
          ? newState(enabledIntegrations)
          : newState

      const decisions: ConsentManagerDecisions = {}

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

export function useIntegration(
  id: IntegrationId
): IntegrationConfig | undefined {
  const integrations = useIntegrations()
  return integrations.find((i) => i.id === id)
}
