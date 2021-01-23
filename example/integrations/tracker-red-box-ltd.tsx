import * as React from 'react'

import { IntegrationConfig } from '@techboi/consent-manager'

const Icon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
)

export function createRedBoxLtdIntegration(): IntegrationConfig {
  return {
    id: 'integration-with-wrapper',
    title: 'Red Box Ltd.',
    category: 'statistics',
    description:
      'Adds red borders around your content, demonstrates use of components that do e.g. click tracking',
    color: '#C21515',
    contrastColor: '#fff',
    Icon,
    wrapperComponent: ({ children }) => (
      <div
        style={{ border: '3px solid #C21515' }}
        data-testid="consent-manager-wrapping-component"
      >
        {children}
      </div>
    ),
  }
}
