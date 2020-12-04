import React, { useContext } from 'react'
import { Location } from 'history'
import {
  FallbackComponentProps,
  IntegrationId,
  PrivacyManagerConfig,
  PrivacyManagerDecisions,
} from './config'
import PrivacyManagerContext from './context'
import { useDecisions } from './decisions'
import { PrivacyManagerStore } from './storage'

import { IntegrationWrapperComponents } from './components/IntegrationWrapperComponents'
import { FallbackComponent } from './components/FallbackComponent'

export interface PrivacyManagerProps {
  config: PrivacyManagerConfig
  fallbackComponent?: React.ComponentType<FallbackComponentProps>
  store: PrivacyManagerStore
}

export const PrivacyManager: React.FC<PrivacyManagerProps> = ({
  children,
  config,
  fallbackComponent = FallbackComponent,
  store,
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

export function useDecision(id: IntegrationId): boolean {
  const [decisions] = useDecisions()
  const decision = decisions[id] ?? false

  return decision
}

export function useFallbackComponent(): React.ComponentType<
  FallbackComponentProps
> {
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
  P extends $ElementProps<C> & { fallbackUrl?: string }
>(
  id: IntegrationId,
  Component: C,
  FallbackComponent?: React.ComponentType<FallbackComponentProps>
): React.ComponentType<P> {
  const decision = useDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (!decision) {
    const Comp: React.ComponentType<FallbackComponentProps> =
      FallbackComponent || DefaultFallbackComponent

    // We ignore any args passed to the Component
    return ({ fallbackUrl }: P) => (
      <Comp fallbackUrl={fallbackUrl} integrationId={id} />
    )
  }

  // TODO: this is actually the exact type the inference comes from
  // why is return type inference not possible without explicit cast?
  // TODO: this currently receives a `fallbackUrl` as well
  return Component as React.ComponentType<P>
}

export interface PrivacyShieldProps {
  id: IntegrationId
}
export const PrivacyShield: React.FC<PrivacyShieldProps> = ({
  id,
  children,
}) => {
  const decision = useDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (decision) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return <DefaultFallbackComponent integrationId={id} />
}

export type PageViewEventTrigger = (location: Location) => void

export function usePageViewEventTrigger(
  id: IntegrationId
): PageViewEventTrigger {
  const decision = useDecision(id)
  const { config } = useContext(PrivacyManagerContext)
  const integration = config.integrations.find(i => i.id === id)

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

export { PrivacyManagerConfig, PrivacyManagerDecisions }
export { usePrivacyFormVisible } from './decisions'
export { PrivacyManagerStorageState, PrivacyManagerStateHook } from './storage'
export { PrivacyManagerForm } from './components/PrivacyManagerForm'
export {
  DecisionsFormProps,
  DecisionsFormState,
} from './components/DecisionsForm'
export { useIntegration, useEnabledIntegrations } from './integrations'
export { useIntegrations } from './context'
