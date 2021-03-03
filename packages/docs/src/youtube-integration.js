import React from 'react'
import YouTube from 'simple-icons/icons/youtube'
import { hex } from 'wcag-contrast'

function getForegroundColor(bgHex) {
  return hex(bgHex, '#000') >= 7 ? '#000' : '#fff'
}

function createIconComponentForSvgPath({ title, path }) {
  return ({ color = 'currentColor', ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 24 24"
        {...props}
      >
        <title>{title}</title>
        <path d={path} />
      </svg>
    )
  }
}

export default function YouTubeIntegration() {
  const { title, slug, hex, path } = YouTube
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const lang =
    typeof window !== 'undefined' ? window.navigator.language : 'en-US'
  const Icon = createIconComponentForSvgPath({ title, path })

  return {
    id: slug,
    title,
    category: 'social',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://policies.google.com/privacy?hl=${lang}`,
    description:
      'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
  }
}
