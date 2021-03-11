import React from 'react'
import { hex } from 'wcag-contrast'

export function getForegroundColor(bgHex: string): string {
  return hex(bgHex, '#000') >= 7 ? '#000' : '#fff'
}

export interface IconComponentProps {
  color?: string
}

export const createIconComponentFromSimpleIconsSvgPath: (
  title: string,
  path: string
) => React.FC<IconComponentProps> = (title: string, path: string) => ({
  color = 'currentColor',
  ...props
}: IconComponentProps) => (
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
