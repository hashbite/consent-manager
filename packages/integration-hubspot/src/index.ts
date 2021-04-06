import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  IntegrationConfigOptions,
  useIntegration,
  useScript,
} from '@consent-manager/core'
import React from 'react'

import hubspot from 'simple-icons/icons/hubspot'

const ScriptInjector: React.FC = () => {
  const hubspotConfig = useIntegration('hubspot')

  if (!hubspotConfig || !hubspotConfig.options) {
    throw new Error(
      'It is not possible to initialize hubspot without configuration'
    )
  }

  const { hubId } = hubspotConfig.options

  useScript(`//js.hs-scripts.com/${hubId}.js`, { id: 'hs-script-loader' })

  return null
}

// @todo required options are not yet possible.
// See: https://github.com/techboi/consent-manager/issues/19
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
    category: 'statistics',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://legal.hubspot.com/product-privacy-policy`,
    description: 'We use Hubspot to improve your browsing experience.',
    ScriptInjector,
    options,
  }
}
