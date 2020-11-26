import { useContext, useMemo } from 'react'
import { Location } from 'history'
import {
  configToDecisions,
  IntegrationName,
  PrivacyManagerConfig,
  PrivacyManagerDecisions,
} from './config'
import PrivacyManagerContext from './context'

export interface PrivacyManagerProps {
  config: PrivacyManagerConfig
  fallbackComponent?: React.ComponentType
}

export const PrivacyManager: React.FC<PrivacyManagerProps> = ({
  children,
  config,
  fallbackComponent = () => null,
}) => {
  const decisions = useMemo(() => {
    return configToDecisions(config)
  }, [config])

  const Wrapper = useWrapperComponents(config, decisions)

  return (
    <PrivacyManagerContext.Provider value={{ decisions, fallbackComponent, config }}>
      <Wrapper>{children}</Wrapper>
    </PrivacyManagerContext.Provider>
  )
}

function useWrapperComponents(config: PrivacyManagerConfig, decisions: PrivacyManagerDecisions) {
  const Wrapper: React.ComponentType = useMemo(
    () => {
      return (({ children }) => {
        return config.integrations
          .filter((i) => decisions[i.id] === true)
          .reverse()
          .reduce((children, { wrapperComponent: WrapperComponent }) => {
            if (!WrapperComponent) {
              return children
            }
            return <WrapperComponent>{children}</WrapperComponent>
          }, children)
      }) as React.FC
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

export function useFallbackComponent(): React.ComponentType {
  const { fallbackComponent: FallbackComponent } = useContext(
    PrivacyManagerContext
  )

  if (!FallbackComponent) {
    return () => null
  }

  return FallbackComponent
}

declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
  ? Props extends object
    ? Props
    : never
  : never;

export function usePrivacyManagerShield<
  C extends React.ComponentType,
  P extends $ElementProps<C>
>(
  id: IntegrationName,
  Component: C,
  FallbackComponent?: React.ComponentType<Partial<P>>
): React.ComponentType<P> {
  const decision = usePrivacyManagerDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (!decision) {
    const Comp = FallbackComponent || DefaultFallbackComponent

    // We ignore any args passed to the Component
    return (_props: P) => (
      <Comp />
    )
  }

  // TODO: this is actually the exact type the inference comes from
  // why is return type inference not possible without explicit cast?
  return Component as React.ComponentType<P>
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

export type PageViewEventTrigger = (location: Location) => void

export function usePageViewEventTrigger(id: IntegrationName): PageViewEventTrigger {
  const decision = usePrivacyManagerDecision(id)
  const { config } = useContext(PrivacyManagerContext)
  const integration = config.integrations.find((i) => i.id === id)

  if (!decision || !integration || typeof integration.pageViewEventHandler !== 'function') {
    return () => {}
  }

  return integration.pageViewEventHandler
}
