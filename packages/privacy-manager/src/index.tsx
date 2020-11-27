import React, { useContext } from 'react'
import { Location } from 'history'
import { IntegrationName, PrivacyManagerConfig } from './config'
import PrivacyManagerContext from './context'
import { useDecisions } from './decisions'
import { PrivacyManagerStore } from './storage'

import { IntegrationWrapperComponents } from './components/IntegrationWrapperComponents'

export interface PrivacyManagerProps {
  config: PrivacyManagerConfig
  fallbackComponent?: React.ComponentType
  store: PrivacyManagerStore
}

export const PrivacyManager: React.FC<PrivacyManagerProps> = ({
  children,
  config,
  fallbackComponent = () => null,
  store
}) => {
  return (
    <PrivacyManagerContext.Provider
      value={{ fallbackComponent, config, store }}
    >
      <IntegrationWrapperComponents config={config}>
        {children}
      </IntegrationWrapperComponents>
    </PrivacyManagerContext.Provider>
  )
}

export function useDecision(id: IntegrationName): boolean {
  const [decisions] = useDecisions()
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
  : never

export function usePrivacyManagerShield<
  C extends React.ComponentType,
  P extends $ElementProps<C>
>(
  id: IntegrationName,
  Component: C,
  FallbackComponent?: React.ComponentType<Partial<P>>
): React.ComponentType<P> {
  const decision = useDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (!decision) {
    const Comp = FallbackComponent || DefaultFallbackComponent

    // We ignore any args passed to the Component
    return (_props: P) => <Comp />
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
  children
}) => {
  const decision = useDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (decision) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return <DefaultFallbackComponent />
}

export type PageViewEventTrigger = (location: Location) => void

export function usePageViewEventTrigger(
  id: IntegrationName
): PageViewEventTrigger {
  const decision = useDecision(id)
  const { config } = useContext(PrivacyManagerContext)
  const integration = config.integrations.find((i) => i.id === id)

  if (
    !decision ||
    !integration ||
    typeof integration.pageViewEventHandler !== 'function'
  ) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {}
  }

  return integration.pageViewEventHandler
}

export { PrivacyManagerConfig }
export { usePrivacyFormVisible } from './decisions'
export { usePrivacyManagerState, PrivacyManagerStorageState } from './storage'
export { PrivacyManagerForm } from './components/PrivacyManagerForm'
