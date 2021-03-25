import { createContext, useContext, useMemo } from 'react'
import {
  FallbackComponentProps,
  IntegrationConfig,
  ConsentManagerConfig,
} from './config'
import { ConsentManagerStore } from './storage'

interface ConsentManagerContextValue {
  FallbackComponent: React.ComponentType<FallbackComponentProps>
  config: ConsentManagerConfig
  store: ConsentManagerStore
}

const ConsentManagerContext = createContext<ConsentManagerContextValue>({
  FallbackComponent: () => null,
  config: { integrations: [] },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  store: [{ decisions: {} }, () => {}],
})

export default ConsentManagerContext

export function useConfig(): ConsentManagerConfig {
  const { config } = useContext(ConsentManagerContext)
  return useMemo(() => config, [config])
}

export function useStore(): ConsentManagerStore {
  const { store } = useContext(ConsentManagerContext)
  return useMemo(() => store, [store])
}

export function useIntegrations(): IntegrationConfig[] {
  const { config } = useContext(ConsentManagerContext)
  const { integrations } = config
  return useMemo(() => integrations, [integrations])
}
