import { PageViewEventTrigger } from '.'

export type IntegrationId = string

export interface IntegrationConfig {
  id: string
  title: string
  description: string
  wrapperComponent?: React.ComponentType
  pageViewEventHandler?: PageViewEventTrigger
  privacyPolicyUrl?: string
  iconSrc?: string
}

export interface ConsentManagerConfig {
  integrations: IntegrationConfig[]
}

export interface ConsentManagerDecisions {
  [key: string]: boolean
}

export interface FallbackComponentProps {
  integrationId: IntegrationId
  fallbackUrl?: string
}
