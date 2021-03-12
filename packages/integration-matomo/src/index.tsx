import React from 'react'

import {
  getForegroundColor,
  IntegrationConfig,
  createIconComponentFromSimpleIconsSvgPath,
  useIntegration,
  useDecision,
  IntegrationConfigOptions,
  Tracker,
  TrackerEvents,
} from '@techboi/consent-manager'

import Matomo from 'simple-icons/icons/matomo'

declare global {
  interface Window {
    _paq?: unknown[]
  }
}

// @todo required options are not yet possible.
// See: https://github.com/techboi/consent-manager/issues/19
interface MatomoTrackerConfig extends IntegrationConfigOptions {
  matomoURL?: string // @todo this should be requred
  siteID?: string // @todo this should be requred
  enableLinkTracking?: boolean
  enableHeartBeatTimer?: boolean
}

let wasInitialized = false

export const getMatomoTracker = (): TrackerEvents => ({
  trackEvent: (...args: unknown[]) =>
    window._paq && window._paq.push(['trackEvent', ...args]),
  trackPageView: (...args: unknown[]) =>
    window._paq && window._paq.push(['trackPageView', ...args]),
  track: (...args: unknown[]) => window._paq && window._paq.push([...args]),
})

export const useMatomoTracker = ({
  matomoURL,
  siteID,
  enableLinkTracking = true,
  enableHeartBeatTimer = true,
}: MatomoTrackerConfig): Tracker => {
  const [isEnabled] = useDecision('matomo')

  if (!wasInitialized) {
    const _paq = (window._paq = window._paq || [])

    _paq.push(['trackPageView'])
    enableLinkTracking && _paq.push(['enableLinkTracking'])
    enableHeartBeatTimer && _paq.push(['enableHeartBeatTimer'])
    _paq.push(['setTrackerUrl', `${matomoURL}matomo.php`])
    _paq.push(['setSiteId', siteID])

    const script = document.createElement('script')

    script.src = `${matomoURL}matomo.js`
    script.async = true

    document.body.appendChild(script)

    wasInitialized = true
  }

  const tracker = getMatomoTracker()

  if (!tracker) {
    throw new Error('Trying to access tracker before it is initialized')
  }

  return {
    isEnabled,
    ...tracker,
  }
}

const WrapperComponent: React.FC = ({ children }) => {
  const MatomoConfig = useIntegration('matomo')

  if (!MatomoConfig || !MatomoConfig.options) {
    throw new Error(
      'It is not possible to initialize Matomo without configuration'
    )
  }

  useMatomoTracker(MatomoConfig.options)

  return <>{children}</>
}

interface MatomoIntegrationArgs extends MatomoTrackerConfig {}

export function matomoIntegration({
  matomoURL,
  siteID,
}: MatomoIntegrationArgs): IntegrationConfig {
  const { title, slug, hex, path } = Matomo
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)

  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'statistics',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://matomo.org/privacy-policy/`,
    description:
      'Matomo is the leading open-source web analytics platform, used on over 1 million websites in over 190 countries, and translated into over 50 languages. Matomo is the ethical choice for those who value privacy and 100% data ownership.',
    WrapperComponent,
    options: { matomoURL, siteID },
  }
}
