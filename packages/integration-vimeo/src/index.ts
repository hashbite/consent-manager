import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
} from '@consent-manager/core'

import { siVimeo } from 'simple-icons'

export function vimeoIntegration(): IntegrationConfig {
  const { title, slug, hex, path } = siVimeo
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'Videos',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://vimeo.com/privacy`,
    description:
      'Vimeo is a video sharing service trusted By Over 80 Million Worldwide.',
  }
}
