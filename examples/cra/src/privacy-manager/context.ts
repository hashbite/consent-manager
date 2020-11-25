import { createContext } from 'react'
import { PrivacyManagerDecisions } from './config'

interface PrivacyManagerContextValue {
  decisions: PrivacyManagerDecisions
}

// TODO(ts): what's in the context
const PrivacyManagerContext = createContext<PrivacyManagerContextValue>({ decisions: {} })

export default PrivacyManagerContext
