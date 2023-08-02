import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  IntegrationConfigOptions,
  useDecision,
  useIntegration,
} from '@consent-manager/core'
import React from 'react'

import { siGoogletagmanager } from 'simple-icons'

import TagManager from 'react-gtm-module'

let wasInitialized = false

declare global {
  interface Window {
    GTM: any
  }
}

export const getGoogleTagManager = () => {
  return window.GTM
}

const WrapperComponent: React.FC = () => {
  const [isEnabled] = useDecision('google-tag-manager')
  const googleTagManagerConfig = useIntegration('google-tag-manager')

  if (!googleTagManagerConfig || !googleTagManagerConfig.options) {
    throw new Error(
      'It is not possible to initialize googleAnalytics without configuration'
    )
  }

  const { gtmId } = googleTagManagerConfig.options

  if (!wasInitialized && isEnabled) {
    TagManager.initialize({ gtmId })
    window.GTM = TagManager
    wasInitialized = true
  }
  return null
}

// @todo required options are not yet possible.
// See: https://github.com/hashbite/consent-manager/issues/19
interface googleTagManagerConfig extends IntegrationConfigOptions {
  trackingId?: string // @todo this should be required
}

export function googleTagManagerIntegration(
  options: googleTagManagerConfig
): IntegrationConfig {
  const { title, hex, path } = siGoogletagmanager
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)
  const lang =
    typeof window !== 'undefined' ? window.navigator.language : 'en-US'

  return {
    id: 'google-tag-manager',
    title,
    category: 'Statistics',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://policies.google.com/privacy?hl=${lang}`,
    description:
      'We use Google Tag Manager to improve your browsing experience.',
    WrapperComponent,
    options,
  }
}
