import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  IntegrationConfigOptions,
  useDecision,
  useIntegration,
} from '@consent-manager/core'
import React from 'react'

import googleAnalytics from 'simple-icons/icons/googleanalytics'

import ReactGA from 'react-ga'

declare global {
  interface Window {
    ReactGA: any
  }
}
let wasInitialized = false

export const getGoogleAnalytics = () => {
  return window.ReactGA
}

const WrapperComponent: React.FC = () => {
  const [isEnabled] = useDecision('google-analytics')
  const googleAnalyticsConfig = useIntegration('google-analytics')

  if (!googleAnalyticsConfig || !googleAnalyticsConfig.options) {
    throw new Error(
      'It is not possible to initialize googleAnalytics without configuration'
    )
  }

  const { trackingId } = googleAnalyticsConfig.options

  if (!wasInitialized && isEnabled) {
    ReactGA.initialize(trackingId)
    window.ReactGA = ReactGA
    wasInitialized = true
  }
  return null
}

// @todo required options are not yet possible.
// See: https://github.com/techboi/consent-manager/issues/19
interface googleAnalyticsConfig extends IntegrationConfigOptions {
  trackingId?: string // @todo this should be required
}

export function googleAnalyticsIntegration(
  options: googleAnalyticsConfig
): IntegrationConfig {
  const { title, hex, path } = googleAnalytics
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)
  const lang =
    typeof window !== 'undefined' ? window.navigator.language : 'en-US'

  return {
    id: 'google-analytics',
    title,
    category: 'statistics',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://policies.google.com/privacy?hl=${lang}`,
    description: 'We use Google Analytics to improve your browsing experience.',
    WrapperComponent,
    options,
  }
}
