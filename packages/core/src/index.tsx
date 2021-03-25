import React, { Dispatch, SetStateAction, useContext, useMemo } from 'react'

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
import { FallbackComponent as DefaultFallbackComponent } from './components/FallbackComponent'

export interface ConsentManagerProps {
  config: ConsentManagerConfig
  FallbackComponent?: React.ComponentType<FallbackComponentProps>
  store: ConsentManagerStore
}

export const ConsentManager: React.FC<ConsentManagerProps> = ({
  children,
  config,
  FallbackComponent = DefaultFallbackComponent,
  store,
}) => {
  return (
    <ConsentManagerContext.Provider
      value={{ FallbackComponent, config, store }}
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
  const { FallbackComponent } = useContext(ConsentManagerContext)

  // The rest of your rendering logic
  return useMemo(() => FallbackComponent || null, [FallbackComponent])
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
export {
  IntegrationConfig,
  IntegrationIconComponentProps,
  IntegrationConfigOptions,
  Tracker,
  TrackerEvents,
  FallbackComponentProps,
} from './config'

export {
  getForegroundColor,
  createIconComponentFromSimpleIconsSvgPath,
} from './integration-helpers'
