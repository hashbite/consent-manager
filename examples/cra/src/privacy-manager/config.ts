export type IntegrationName = string

export interface IntegrationConfig {
  id: string
}

export interface PrivacyManagerConfig {
  integrations: IntegrationConfig[]
}

export interface PrivacyManagerDecisions {
  [key: string]: boolean
}

export function configToDecisions(config: PrivacyManagerConfig): PrivacyManagerDecisions {
  const decisions: PrivacyManagerDecisions = {}

  for (const integration of config.integrations) {
    decisions[integration.id] = true
  }

  return decisions
}
