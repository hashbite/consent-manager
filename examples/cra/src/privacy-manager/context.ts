import { createContext } from 'react'
import { PrivacyManagerConfig, PrivacyManagerDecisions } from './config'

interface PrivacyManagerContextValue {
  decisions: PrivacyManagerDecisions
  fallbackComponent: React.ComponentType
  config: PrivacyManagerConfig
}

// TODO(ts): what's in the context
const PrivacyManagerContext = createContext<PrivacyManagerContextValue>({
  decisions: {},
  fallbackComponent: () => null,
  config: { integrations: [] }
})

export default PrivacyManagerContext
