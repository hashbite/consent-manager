import React from 'react'
import { hex } from 'wcag-contrast'

import { IntegrationIconComponentProps } from './config'

export function getForegroundColor(bgHex: string): string {
  return hex(bgHex, '#000') >= 7 ? '#000' : '#fff'
}

export const createIconComponentFromSimpleIconsSvgPath: (
  title: string,
  path: string
) => React.FC<IntegrationIconComponentProps> = (
  title: string,
  path: string
) => ({ color = 'currentColor', ...props }: IntegrationIconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    viewBox="0 0 24 24"
    height="100%"
    {...props}
  >
    <title>{title}</title>
    <path d={path} />
  </svg>
)
