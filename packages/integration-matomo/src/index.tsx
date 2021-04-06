import React from 'react'

import {
  getForegroundColor,
  IntegrationConfig,
  createIconComponentFromSimpleIconsSvgPath,
  useIntegration,
  useDecision,
  IntegrationConfigOptions,
  Tracker,
  useScript,
  locateTracker,
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

export const trackPageViewSPA = ({
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

interface MatomoTracker extends Array<Array<String>>, Tracker {}

export function getMatomo() {
  return window._paq
}

export function useMatomo(): MatomoTracker | null {
  const [isEnabled] = useDecision('matomo')
  const [tracker, setTracker] = React.useState(null)

  React.useEffect(() => {
    if (isEnabled && !tracker) {
      locateTracker('_paq', setTracker)
    }
  }, [isEnabled, setTracker, tracker])

  if (!isEnabled) {
    return null
  }

  return tracker
}

const ScriptInjector: React.FC = () => {
  const MatomoConfig = useIntegration('matomo')

  if (!MatomoConfig || !MatomoConfig.options) {
    throw new Error(
      'It is not possible to initialize Matomo without configuration'
    )
  }

  const {
    matomoURL,
    siteID,
    enableLinkTracking = true,
    enableHeartBeatTimer = true,
  }: MatomoTrackerConfig = MatomoConfig.options

  useScript(`${matomoURL}matomo.js`, { id: 'red-box-ltd' })

  if (!wasInitialized) {
    const _paq = (window._paq = window._paq || [])

    enableLinkTracking && _paq.push(['enableLinkTracking'])
    enableHeartBeatTimer && _paq.push(['enableHeartBeatTimer'])
    _paq.push(['setTrackerUrl', `${matomoURL}matomo.php`])
    _paq.push(['setSiteId', siteID])

    wasInitialized = true
  }

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
    category: 'statistics',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://matomo.org/privacy-policy/`,
    description:
      'Matomo is the leading open-source web analytics platform, used on over 1 million websites in over 190 countries, and translated into over 50 languages. Matomo is the ethical choice for those who value privacy and 100% data ownership.',
    ScriptInjector,
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
    title: `Fair Statistics`,
    description: `Our privacy-aware statistics tool will not track you across websites or multiple days. No personal data is collected, while all other data is strongly anonymized. You can opt-out at any time.`,
  }
}
