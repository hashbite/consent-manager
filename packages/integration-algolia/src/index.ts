import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
} from '@consent-manager/core'

import algolia from 'simple-icons/icons/algolia'

export function algoliaIntegration(): IntegrationConfig {
  const { title, slug, hex, path } = algolia
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'Search',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://www.algolia.com/policies/privacy/`,
    description:
      'We use Algolia to provide you a high performant and feature-rich search experience.',
  }
}
