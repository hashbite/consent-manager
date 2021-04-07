import * as React from 'react'

import { IntegrationConfig, useDecision, Tracker } from '@consent-manager/core'

declare global {
  interface Window {
    rbltd?: RedBoxLtdWindow
  }
}

interface RedBoxLtdWindow extends Tracker {}

const createRedBoxTracker = () => {
  console.log('Initializing Red Box Ltd. tracking')
  window.rbltd = {
    trackEvent: (...data) => {
      console.log('custom event tracked', data)
      alert(['told ya!', ...data].join(' '))
    },
    trackPageView: (location: Location) => {
      console.log(`page view: ${location.pathname}`, location)
    },
  }
}

const Icon: React.FC = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
)

// ensure that the tracker script will be initialized once in runtime
let wasInitialized = false

const WrapperComponent: React.FC = () => {
  React.useEffect(() => {
    if (!wasInitialized) {
      createRedBoxTracker()
      wasInitialized = true
    }
  }, [])

  // @todo replace this with a real js script that gets injected
  return <script id="red-box-ltd" async defer type="text/javascript" src="#" />
}

export function useRedBoxLtd(): Tracker {
  const [isEnabled] = useDecision('red-box-ltd')

  const redBoxLtdInterface = React.useMemo(() => {
    if (!isEnabled) {
      return {
        trackEvent: () => {},
        trackPageView: () => {},
      }
    }

    return {
      trackEvent: (...args) =>
        window.rbltd &&
        window.rbltd.trackEvent &&
        window.rbltd.trackEvent(...args),
      trackPageView: (...args) =>
        window.rbltd &&
        window.rbltd.trackPageView &&
        window.rbltd.trackPageView(...args),
    }
  }, [isEnabled])

  return redBoxLtdInterface
}

export function redBoxLtdIntegration(): IntegrationConfig {
  return {
    id: 'red-box-ltd',
    title: 'Red Box Ltd.',
    category: 'statistics',
    description: 'Demonstrates click and page view tracking',
    color: '#C21515',
    contrastColor: '#fff',
    Icon,
    WrapperComponent,
  }
}
