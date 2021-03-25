import { createContext, useContext } from 'react'
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
  return config
}

export function useStore(): ConsentManagerStore {
  const { store } = useContext(ConsentManagerContext)
  return store
}

export function useIntegrations(): IntegrationConfig[] {
  const { config } = useContext(ConsentManagerContext)
  return config.integrations
}
