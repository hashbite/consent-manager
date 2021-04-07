import * as React from 'react'

import { IntegrationConfig } from '@consent-manager/core'

const Icon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
      clipRule="evenodd"
    />
  </svg>
)

const ScriptInjector: React.FC = () => {
  return (
    <img
      height="1"
      width="1"
      style={{ display: 'none' }}
      src="/zero-pixel.png"
      alt="In this case, this actually does nothing"
    />
  )
}

export function innocentPixelIntegration(): IntegrationConfig {
  return {
    id: 'innocent-pixel',
    title: 'Innocent Pixel',
    category: 'statistics',
    description: 'Example integration that injects a pixel tracking technique.',
    color: '#2d4876',
    contrastColor: '#fff',
    Icon,
    ScriptInjector,
  }
}
