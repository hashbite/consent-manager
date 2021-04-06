import React, { useEffect, useState } from 'react'
import { hex } from 'wcag-contrast'

import { IntegrationIconComponentProps } from './config'
declare global {
  interface Window {
    [key: string]: unknown
  }
}

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
    /* Ensure SVG behaves responsive on Safari and some older browsers like IE */
    height="100%"
    width="100%"
    {...props}
  >
    <title>{title}</title>
    <path d={path} />
  </svg>
)

export type Status = 'idle' | 'loading' | 'ready' | 'error'
export type ScriptElt = HTMLScriptElement | null

export function useScript(
  src: string,
  attributes: { [key: string]: string }
): Status {
  const [status, setStatus] = useState<Status>(src ? 'loading' : 'idle')

  useEffect(
    () => {
      if (!src) {
        setStatus('idle')
        return
      }

      // Fetch existing script element by src
      // It may have been added by another instance of this hook
      let script: ScriptElt = document.querySelector(`script[src="${src}"]`)

      if (!script) {
        // Create script
        // eslint-disable-next-line consent-manager/do-not-inject-scripts
        script = document.createElement('script')
        script.src = src
        script.async = true
        script.defer = true
        script.type = 'text/javascript'
        script.setAttribute('data-status', 'loading')

        if (attributes) {
          Object.keys(attributes).forEach(name => {
            // @todo why ts forces us to check here again?
            script && script.setAttribute(name, attributes[name])
          })
        }

        // Add script to document body
        document.body.appendChild(script)

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event: Event) => {
          script?.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          )
        }

        script.addEventListener('load', setAttributeFromEvent)
        script.addEventListener('error', setAttributeFromEvent)
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status') as Status)
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: Event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error')
      }

      // Add event listeners
      script.addEventListener('load', setStateFromEvent)
      script.addEventListener('error', setStateFromEvent)

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent)
          script.removeEventListener('error', setStateFromEvent)
          script.remove()
        }
      }
    },
    [src, attributes] // Only re-run effect if script src changes
  )

  return status
}

export function locateTracker(
  name: string,
  set: React.Dispatch<React.SetStateAction<any>>,
  iteration = 0
): undefined {
  const tracker = window[name]

  if (tracker) {
    set(tracker)
    return
  }
  iteration++

  if (iteration === 10) {
    throw new Error(
      `Could not locate integration ${name} within 10 tries (3 seconds)`
    )
  }

  window.setTimeout(() => {
    locateTracker(name, set, iteration)
  }, iteration * 300)

  return
}
