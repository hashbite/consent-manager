import { PageViewEventTrigger } from '.'

export type IntegrationName = string

export interface IntegrationConfig {
  id: string
  wrapperComponent?: React.ComponentType
  pageViewEventHandler?: PageViewEventTrigger
}

export interface PrivacyManagerConfig {
  integrations: IntegrationConfig[]
}

export interface PrivacyManagerDecisions {
  [key: string]: boolean
}
