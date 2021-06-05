import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  IntegrationConfigOptions,
  useDecision,
  useIntegration,
} from '@consent-manager/core'
import React from 'react'

import hubspot from 'simple-icons/icons/hubspot'

let wasInitialized = false

const WrapperComponent: React.FC = () => {
  const [isEnabled] = useDecision('hubspot')
  const hubspotConfig = useIntegration('hubspot')

  if (!hubspotConfig || !hubspotConfig.options) {
    throw new Error(
      'It is not possible to initialize hubspot without configuration'
    )
  }

  const { hubId } = hubspotConfig.options

  if (!wasInitialized && isEnabled) {
    const script = document.createElement('script')
    script.src = `//js.hs-scripts.com/${hubId}.js`
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
// See: https://github.com/hashbite/consent-manager/issues/19
interface hubspotConfig extends IntegrationConfigOptions {
  hubId?: string // @todo this should be required
}

export function hubspotIntegration(options: hubspotConfig): IntegrationConfig {
  const { title, slug, hex, path } = hubspot
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
    privacyPolicyUrl: `https://legal.hubspot.com/product-privacy-policy`,
    description: 'We use Hubspot to improve your browsing experience.',
    WrapperComponent,
    options,
  }
}
