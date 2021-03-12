import { PageViewEventTrigger } from '.'

export type IntegrationId = string

export interface IntegrationIconComponentProps {
  color?: string
}

export interface IntegrationConfigOptions {
  [key: string]: any
}

export interface IntegrationConfig {
  id: string
  title: string
  description: string
  category: 'statistics' | 'social'
  color?: string
  contrastColor?: string
  privacyPolicyUrl?: string
  Icon: React.ComponentType<IntegrationIconComponentProps>
  pageViewEventHandler?: PageViewEventTrigger
  WrapperComponent?: React.ComponentType
  options?: IntegrationConfigOptions
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
