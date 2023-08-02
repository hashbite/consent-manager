import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
} from '@consent-manager/core'

import { siMapbox } from 'simple-icons'

export function mapboxIntegration(): IntegrationConfig {
  const { title, slug, hex, path } = siMapbox
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
