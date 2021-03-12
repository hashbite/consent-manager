import React from 'react'

import {
  getForegroundColor,
  IntegrationConfig,
  createIconComponentFromSimpleIconsSvgPath,
  useIntegration,
  IntegrationConfigOptions,
} from '@techboi/consent-manager'

import Matomo from 'simple-icons/icons/matomo'

declare global {
  interface Window {
    _paq?: unknown[]
  }
}

interface MatomoTrackerConfig extends IntegrationConfigOptions {
  matomoURL: string
  siteID: string
}

const useMatomoTracker = ({ matomoURL, siteID }: MatomoTrackerConfig) => {
  if (wasInitialized) {
    return
  }

  const _paq = (window._paq = window._paq || [])

  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking'])
  _paq.push(['setTrackerUrl', `${matomoURL}matomo.php`])
  _paq.push(['setSiteId', siteID])

  const script = document.createElement('script')

  script.src = `${matomoURL}matomo.js`
  script.async = true

  document.body.appendChild(script)

  wasInitialized = true
}

// ensure that the tracker script will be initialized once in runtime
let wasInitialized = false

const WrapperComponent: React.FC = ({ children }) => {
  const MatomoConfig = useIntegration('matomo')

  if (!MatomoConfig || !MatomoConfig.config) {
    throw new Error(
      'It is not possible to initialize Matomo without configuration'
    )
  }

  useMatomoTracker(MatomoConfig.config)

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
