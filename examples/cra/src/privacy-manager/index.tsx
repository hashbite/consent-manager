import { useContext, useMemo } from 'react'
import { configToDecisions, IntegrationName, PrivacyManagerConfig } from './config'
import PrivacyManagerContext from './context'

export interface PrivacyManagerProps {
  config: PrivacyManagerConfig
}

export const PrivacyManager: React.FC<PrivacyManagerProps> = ({
  children,
  config,
}) => {
  const decisions = useMemo(() => {
    return configToDecisions(config)
  }, [config])

  return (
    <PrivacyManagerContext.Provider value={{ decisions }}>
      {children}
    </PrivacyManagerContext.Provider>
  )
}

export function usePrivacyManagerDecision(id: IntegrationName) {
  const { decisions } = useContext(PrivacyManagerContext)
  const decision = decisions[id] ?? false

  return decision
}
