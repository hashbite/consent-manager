import React, { Dispatch, SetStateAction, useContext } from 'react'
import { Location } from 'history'
import {
  FallbackComponentProps,
  IntegrationId,
  ConsentManagerConfig,
  ConsentManagerDecisions,
} from './config'
import ConsentManagerContext from './context'
import { useDecisions } from './decisions'
import { ConsentManagerStore } from './storage'

import { IntegrationWrapperComponents } from './components/IntegrationWrapperComponents'
import { FallbackComponent } from './components/FallbackComponent'

export interface ConsentManagerProps {
  config: ConsentManagerConfig
  fallbackComponent?: React.ComponentType<FallbackComponentProps>
  store: ConsentManagerStore
}

export const ConsentManager: React.FC<ConsentManagerProps> = ({
  children,
  config,
  fallbackComponent = FallbackComponent,
  store,
}) => {
  return (
    <ConsentManagerContext.Provider
      value={{ fallbackComponent, config, store }}
    >
      <IntegrationWrapperComponents config={config}>
        {children}
      </IntegrationWrapperComponents>
    </ConsentManagerContext.Provider>
  )
}

export function useDecision(
  id: IntegrationId
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [decisions, setAndStoreDecisions] = useDecisions()
  const decision = decisions[id] ?? false

  return [
    decision,
    (value: SetStateAction<boolean>) => {
      const newStateValue =
        typeof value === 'function' ? value(decision) : value

      setAndStoreDecisions(decisions => ({ ...decisions, [id]: newStateValue }))
    },
  ]
}

export function useFallbackComponent(): React.ComponentType<
  FallbackComponentProps
> {
  const { fallbackComponent: FallbackComponent } = useContext(
    ConsentManagerContext
  )

  if (!FallbackComponent) {
    return () => null
  }

  return FallbackComponent
}

export interface PrivacyShieldProps {
  id: IntegrationId
}
export const PrivacyShield: React.FC<PrivacyShieldProps> = ({
  id,
  children,
  ...props
}) => {
  const [decision] = useDecision(id)
  const DefaultFallbackComponent = useFallbackComponent()

  if (decision) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return <DefaultFallbackComponent integrationId={id} {...props} />
}

export type PageViewEventTrigger = (location: Location) => void

export function usePageViewEventTrigger(
  id: IntegrationId
): PageViewEventTrigger {
  const [decision] = useDecision(id)
  const { config } = useContext(ConsentManagerContext)
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

export { ConsentManagerConfig, ConsentManagerDecisions }
export { useConsentFormVisible } from './decisions'
export { ConsentManagerStorageState, ConsentManagerStateHook } from './storage'
export { ConsentManagerForm } from './components/ConsentManagerForm'
export {
  DecisionsFormProps,
  DecisionsFormState,
} from './components/DecisionsForm'
export { useIntegration, useEnabledIntegrations } from './integrations'
export { useIntegrations } from './context'
export { IntegrationConfig } from './config'

export {
  getForegroundColor,
  createIconComponentFromSimpleIconsSvgPath,
} from './integration-helpers'
