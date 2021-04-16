import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
} from '@consent-manager/core'

import Mapbox from 'simple-icons/icons/mapbox'

export function mapboxIntegration(): IntegrationConfig {
  const { title, slug, hex, path } = Mapbox
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'Maps',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://www.mapbox.com/legal/privacy`,
    description:
      'We use Mapbox to provide you a dynamic, performant and feature-rich experience with maps.',
  }
}
