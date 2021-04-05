import * as React from 'react'

import {
  IntegrationConfig,
  useDecision,
  Tracker,
  useScript,
  locateTracker,
} from '@consent-manager/core'
import { useEffect } from 'react'

declare global {
  interface Window {
    rbltd?: RedBoxLtdTracker
  }
}

const Icon: React.FC = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
)

const ScriptInjector: React.FC = () => {
  useEffect(() => {
    window.rbltd = window.rbltd || []

    return () => {
      delete window.rbltd
    }
  })

  useScript('/red-box-ltd.js', { id: 'red-box-ltd' })

  return null
}

interface RedBoxLtdTracker extends Array<Array<String>>, Tracker {}

// For usage non-react context when tracking page views (Docusaurus, Gatsby, ...)
// @todo we need to save-guard this by checking if integration is actually enabled
export function getRedBoxLtd() {
  return window.rbltd
}

export function useRedBoxLtd(): RedBoxLtdTracker | null {
  const [isEnabled] = useDecision('red-box-ltd')
  const [tracker, setTracker] = React.useState(null)

  React.useEffect(() => {
    if (isEnabled && !tracker) {
      locateTracker('rbltd', setTracker)
    }
  }, [isEnabled, setTracker, tracker])

  if (!isEnabled) {
    return null
  }

  return tracker
}

export function redBoxLtdIntegration(): IntegrationConfig {
  return {
    id: 'red-box-ltd',
    title: 'Red Box Ltd.',
    category: 'statistics',
    description:
      'Example integration that injects scripts to demonstrate click and page tracking',
    color: '#C21515',
    contrastColor: '#fff',
    Icon,
    ScriptInjector,
  }
}
