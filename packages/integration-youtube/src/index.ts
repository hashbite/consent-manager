import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
} from '@consent-manager/core'

import { siYoutube } from 'simple-icons'

export function youtubeIntegration(): IntegrationConfig {
  const { title, slug, hex, path } = siYoutube
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const lang =
    typeof window !== 'undefined' ? window.navigator.language : 'en-US'
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'Videos',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://policies.google.com/privacy?hl=${lang}`,
    description:
      'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
  }
}
