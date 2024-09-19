import { siCreativecommons } from 'simple-icons'

import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
} from '@consent-manager/core'

export function demoIntegration(): IntegrationConfig {
  const { title, hex, path } = siCreativecommons
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)
  const lang =
    typeof window !== 'undefined' ? window.navigator.language : 'en-US'

  return {
    id: 'demo',
    title: 'Demo Integration',
    category: 'Demo',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://example.com?hl=${lang}`,
    description:
      'Please: Keep me disabled for the privacy shield demo in the docs :)',
  }
}
