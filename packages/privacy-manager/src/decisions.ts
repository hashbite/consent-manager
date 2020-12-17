import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  IntegrationConfig,
  IntegrationId,
  PrivacyManagerDecisions,
} from './config'
import { useIntegrations, useStore } from './context'
import { PrivacyManagerStore } from './storage'

interface InitializeDecisionsFromStorageResult {
  decisions: Record<IntegrationId, boolean>
  pending?: IntegrationId[]
}

export function initializeDecisionsFromStorage(
  configuredIntegrations: IntegrationConfig[],
  storage: PrivacyManagerStore
): InitializeDecisionsFromStorageResult {
  const [store] = storage

  const storedDecisions = store?.decisions ?? {}

  const decisions: Record<IntegrationId, boolean> = {}
  const pending: IntegrationId[] = []

  for (const integration of configuredIntegrations) {
    const storedDecision = storedDecisions[integration.id]

    if (typeof storedDecision === 'undefined') {
      pending.push(integration.id)
    }

    decisions[integration.id] = Boolean(storedDecision)
  }

  return { decisions, pending }
}

function useCombinedIntegrationStoreDecisions(): InitializeDecisionsFromStorageResult {
  const storage = useStore()
  const integrations = useIntegrations()

  const result = useMemo(() => {
    return initializeDecisionsFromStorage(integrations, storage)
  }, [integrations, storage])

  return result
}

export function useDecisions(): [
  PrivacyManagerDecisions,
  Dispatch<SetStateAction<PrivacyManagerDecisions>>
] {
  const { decisions } = useCombinedIntegrationStoreDecisions()
  const [decisionsState, setDecisions] = useState(decisions)
  const [, setStore] = useStore()

  useEffect(() => {
    if (decisionsState === decisions) {
      return
    }

    // TODO: spread old here to preserve decisions
    setDecisions(() => decisions)
  }, [decisions, decisionsState, setDecisions, setStore])

  const setAndStoreDecisions: typeof setDecisions = useCallback(
    newDecisionState => {
      const nextDecisionState =
        typeof newDecisionState === 'function'
          ? newDecisionState(decisionsState)
          : newDecisionState
      setStore(store => ({ ...store, decisions: nextDecisionState }))
    },
    [decisionsState, setStore]
  )

  return [decisionsState, setAndStoreDecisions]
}

export function usePendingDecisions(): IntegrationId[] {
  const { pending } = useCombinedIntegrationStoreDecisions()
  return pending ?? []
}

export function usePrivacyFormVisible(): boolean {
  const pending = usePendingDecisions()
  return pending.length !== 0
}
