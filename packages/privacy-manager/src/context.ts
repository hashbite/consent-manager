import { createContext, useContext } from 'react'
import {
  FallbackComponentProps,
  IntegrationConfig,
  PrivacyManagerConfig,
} from './config'
import { PrivacyManagerStore } from './storage'

interface PrivacyManagerContextValue {
  fallbackComponent: React.ComponentType<FallbackComponentProps>
  config: PrivacyManagerConfig
  store: PrivacyManagerStore
}

const PrivacyManagerContext = createContext<PrivacyManagerContextValue>({
  fallbackComponent: () => null,
  config: { integrations: [] },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  store: [{ decisions: {} }, () => {}],
})

export default PrivacyManagerContext

export function useConfig(): PrivacyManagerConfig {
  const { config } = useContext(PrivacyManagerContext)
  return config
}

export function useStore(): PrivacyManagerStore {
  const { store } = useContext(PrivacyManagerContext)
  return store
}

export function useIntegrations(): IntegrationConfig[] {
  const { config } = useContext(PrivacyManagerContext)
  return config.integrations
}
