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
} from '@consent-manager/core'

import Matomo from 'simple-icons/icons/matomo'

declare global {
  interface Window {
    _paq?: unknown[]
  }
}

// @todo required options are not yet possible.
// See: https://github.com/techboi/consent-manager/issues/19
interface MatomoTrackerConfig extends IntegrationConfigOptions {
  matomoURL?: string // @todo this should be required
  siteID?: string // @todo this should be required
  enableLinkTracking?: boolean
  enableHeartBeatTimer?: boolean
}

let wasInitialized = false

interface TrackedPageData {
  url: string
  title: string
}

interface TrackPageViewSPA {
  location: Location
  prevLocation?: Location
}

const trackPageViewSPA = ({
  location,
  prevLocation,
}: TrackPageViewSPA): TrackedPageData | null => {
  const paq = window._paq
  if (!paq) {
    return null
  }
  const url = location && location.pathname + location.search + location.hash
  const prevUrl =
    prevLocation &&
    prevLocation.pathname + prevLocation.search + prevLocation.hash
  const { title } = document

  prevUrl && paq.push(['setReferrerUrl', prevUrl])
  paq.push(['setCustomUrl', url])
  paq.push(['setDocumentTitle', title])
  paq.push(['trackPageView'])
  paq.push(['enableLinkTracking'])
  paq.push(['trackAllContentImpressions'])

  return { url, title }
}

interface MatomoTrackerEvents extends TrackerEvents {
  trackPageViewSPA: (arg0: TrackPageViewSPA) => TrackedPageData | null
}

export const getMatomoTracker = (): MatomoTrackerEvents => ({
  trackEvent: (...args: unknown[]) =>
    window._paq && window._paq.push(['trackEvent', ...args]),
  trackPageView: (...args: unknown[]) =>
    window._paq && window._paq.push(['trackPageView', ...args]),
  track: (...args: unknown[]) => window._paq && window._paq.push([...args]),
  // @todo consider if we should have only the SPA track function and a regular track call
  // - because we need to track on initial embedding of the script
  trackPageViewSPA,
})

export const useMatomoTracker = ({
  matomoURL,
  siteID,
  // @todo these might need to be in config, but outside of react due to route update hooks
  enableLinkTracking = true,
  enableHeartBeatTimer = true,
}: MatomoTrackerConfig): Tracker => {
  const [isEnabled] = useDecision('matomo')

  if (!wasInitialized && isEnabled) {
    const _paq = (window._paq = window._paq || [])

    enableLinkTracking && _paq.push(['enableLinkTracking'])
    enableHeartBeatTimer && _paq.push(['enableHeartBeatTimer'])
    _paq.push(['setTrackerUrl', `${matomoURL}matomo.php`])
    _paq.push(['setSiteId', siteID])

    const script = document.createElement('script')

    script.src = `${matomoURL}matomo.js`
    script.async = true

    document.body.appendChild(script)

    wasInitialized = true

    // Track current page
    const { location } = window
    trackPageViewSPA({ location })
  }

  const tracker = React.useMemo(() => getMatomoTracker(), [])

  return tracker
}

const WrapperComponent: React.FC = () => {
  const MatomoConfig = useIntegration('matomo')

  if (!MatomoConfig || !MatomoConfig.options) {
    throw new Error(
      'It is not possible to initialize Matomo without configuration'
    )
  }

  useMatomoTracker(MatomoConfig.options)

  return null
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
    category: 'Statistics',
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

export function matomoPrivacyAwareIntegration({
  enabledByDefault = true,
  ...config
}: MatomoIntegrationArgs): IntegrationConfig {
  return {
    ...matomoIntegration(config),
    enabledByDefault,
    category: `Fair Statistics`,
    description: `Our privacy-aware statistics tool will not track you across websites or multiple days. No personal data is collected, while all other data is strongly anonymized. You can opt-out at any time.`,
  }
}
