import { createContext } from 'react'
import { PrivacyManagerDecisions } from './config'

interface PrivacyManagerContextValue {
  decisions: PrivacyManagerDecisions
  fallbackComponent: React.ReactNode
}

// TODO(ts): what's in the context
const PrivacyManagerContext = createContext<PrivacyManagerContextValue>({
  decisions: {},
  fallbackComponent: null,
})

export default PrivacyManagerContext
