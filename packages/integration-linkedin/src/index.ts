import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  IntegrationConfigOptions,
  useDecision,
  useIntegration,
} from '@consent-manager/core'
import React from 'react'

import linkedin from 'simple-icons/icons/linkedin'

declare global {
  interface Window {
    _linkedin_data_partner_ids?: unknown[]
  }
}

let wasInitialized = false

const WrapperComponent: React.FC = () => {
  const [isEnabled] = useDecision('linkedin')
  const linkedinConfig = useIntegration('linkedin')

  if (!linkedinConfig || !linkedinConfig.options) {
    throw new Error(
      'It is not possible to initialize linkedin without configuration'
    )
  }

  const { partnerId } = linkedinConfig.options

  if (!wasInitialized && isEnabled) {
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
    window._linkedin_data_partner_ids.push(partnerId)

    const script = document.createElement('script')
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
    script.async = true
    script.defer = true
    script.type = 'text/javascript'
    script.id = 'hs-script-loader'
    document.body.appendChild(script)

    wasInitialized = true
  }
  return null
}

// @todo required options are not yet possible.
// See: https://github.com/techboi/consent-manager/issues/19
interface linkedinConfig extends IntegrationConfigOptions {
  partnerId?: string // @todo this should be required
}

export function linkedinIntegration(
  options: linkedinConfig
): IntegrationConfig {
  const { title, slug, hex, path } = linkedin
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
    privacyPolicyUrl: `https://linkedin.com/legal/privacy-policy`,
    description: 'We use LinkedIn to improve your browsing experience.',
    WrapperComponent,
    options,
  }
}
