import { PageViewEventTrigger } from '.'

export type IntegrationId = string

export interface IntegrationIconComponentProps {
  color?: string
  className?: string
  [key: string]: unknown
}

export interface IntegrationConfigOptions {
  [key: string]: any
}

export interface IntegrationConfig {
  id: string
  title: string
  description: string
  category: string
  color?: string
  contrastColor?: string
  privacyPolicyUrl?: string
  Icon: React.FC<IntegrationIconComponentProps>
  pageViewEventHandler?: PageViewEventTrigger
  WrapperComponent?: React.FC
  options?: IntegrationConfigOptions
  enabledByDefault?: boolean
}

export interface ConsentManagerConfig {
  integrations: IntegrationConfig[]
  onChangeDecision?: (
    lastDecisionsState: Record<IntegrationId, boolean>,
    nextDecisionState: Record<IntegrationId, boolean>
  ) => unknown
}

export interface ConsentManagerDecisions {
  [key: string]: boolean
}

export interface FallbackComponentProps {
  integrationId: IntegrationId
  fallbackUrl?: string
  [key: string]: unknown
}

export interface TrackerEvents {
  track?: (...args: unknown[]) => unknown
  trackEvent?: (...args: unknown[]) => unknown
  trackPageView?: (...args: unknown[]) => unknown
}

export interface Tracker extends TrackerEvents {}
