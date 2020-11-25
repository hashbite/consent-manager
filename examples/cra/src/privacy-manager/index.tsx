import { useContext, useMemo } from 'react'
import {
  configToDecisions,
  IntegrationName,
  PrivacyManagerConfig,
  PrivacyManagerDecisions,
} from './config'
import PrivacyManagerContext from './context'

export interface PrivacyManagerProps {
  config: PrivacyManagerConfig
  fallbackComponent?: any
}

export const PrivacyManager: React.FC<PrivacyManagerProps> = ({
  children,
  config,
  fallbackComponent,
}) => {
  const decisions = useMemo(() => {
    return configToDecisions(config)
  }, [config])

  const Wrapper = useWrapperComponents(config, decisions)

  return (
    <PrivacyManagerContext.Provider value={{ decisions, fallbackComponent }}>
      <Wrapper>{children}</Wrapper>
    </PrivacyManagerContext.Provider>
  )
}

function useWrapperComponents(config: PrivacyManagerConfig, decisions: PrivacyManagerDecisions) {
  const Wrapper = useMemo(
    () => ({ children }: { children: any }) => {
      return config.integrations
        .filter((i) => Boolean(i.wrapperComponent))
        .filter((i) => decisions[i.id] === true)
        .reverse()
        .reduce((children, { wrapperComponent: WrapperComponent }) => {
          return <WrapperComponent>{children}</WrapperComponent>
        }, children)
    },
    [config.integrations, decisions]
  )
  return Wrapper
}

export function usePrivacyManagerDecision(id: IntegrationName) {
  const { decisions } = useContext(PrivacyManagerContext)
  const decision = decisions[id] ?? false

  return decision
}

export function useFallbackComponent(): any {
  const { fallbackComponent: FallbackComponent } = useContext(
    PrivacyManagerContext
  )

  if (!FallbackComponent) {
    return () => null
  }

  return FallbackComponent
}

export function usePrivacyManagerShield(
  id: IntegrationName,
  Component: React.ReactNode,
  FallbackComponent?: React.ReactNode
): any {
  const decision = usePrivacyManagerDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (!decision) {
    return FallbackComponent || DefaultFallbackComponent
  }

  return Component
}

export interface PrivacyShieldProps {
  id: IntegrationName
}
export const PrivacyShield: React.FC<PrivacyShieldProps> = ({
  id,
  children,
}) => {
  const decision = usePrivacyManagerDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (decision) {
    // TODO(ts): why not return children?
    return <>{children}</>
  }

  return <DefaultFallbackComponent />
}
