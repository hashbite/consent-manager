import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react'
import {
  IntegrationConfig,
  IntegrationId,
  ConsentManagerDecisions,
} from './config'
import ConsentManagerContext, { useIntegrations, useStore } from './context'
import { ConsentManagerStore } from './storage'

interface InitializeDecisionsFromStorageResult {
  decisions: Record<IntegrationId, boolean>
  pending?: IntegrationId[]
}

export function initializeDecisionsFromStorage(
  configuredIntegrations: IntegrationConfig[],
  storage: ConsentManagerStore
): InitializeDecisionsFromStorageResult {
  const [store] = storage

  const storedDecisions = store?.decisions ?? {}

  const decisions: Record<IntegrationId, boolean> = {}
  const pending: IntegrationId[] = []

  for (const integration of configuredIntegrations) {
    const userDecision = storedDecisions[integration.id]
    const enabledByDefault =
      userDecision === undefined && integration.enabledByDefault
    const storedDecision = userDecision || enabledByDefault

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
  ConsentManagerDecisions,
  Dispatch<SetStateAction<ConsentManagerDecisions>>
] {
  const {
    config: { onChangeDecision },
  } = useContext(ConsentManagerContext)
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

      if (onChangeDecision) {
        onChangeDecision(decisionsState, nextDecisionState)
      }
      setStore(store => ({ ...store, decisions: nextDecisionState }))
    },
    [decisionsState, onChangeDecision, setStore]
  )

  return [decisionsState, setAndStoreDecisions]
}

export function usePendingDecisions(): IntegrationId[] {
  const { pending } = useCombinedIntegrationStoreDecisions()
  return pending ?? []
}

export function useConsentFormVisible(): boolean {
  const pending = usePendingDecisions()
  return pending.length !== 0
}
