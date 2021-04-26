import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  IntegrationConfigOptions,
  useDecision,
  useIntegration,
} from '@consent-manager/core'
import React from 'react'

// @todo enable when https://github.com/simple-icons/simple-icons/pull/5394 is published
// import segment from 'simple-icons/icons/segment'

declare global {
  interface Window {
    analytics: any
  }
}
let wasInitialized = false

export const getSegment = () => {
  return window.analytics || []
}

const WrapperComponent: React.FC = () => {
  const [isEnabled] = useDecision('segment')
  const segmentConfig = useIntegration('segment')

  if (!segmentConfig || !segmentConfig.options) {
    throw new Error(
      'It is not possible to initialize Segment without configuration'
    )
  }

  if (!wasInitialized && isEnabled) {
    var analytics = window.analytics || []
    analytics.invoked = !0
    analytics.methods = [
      'trackSubmit',
      'trackClick',
      'trackLink',
      'trackForm',
      'pageview',
      'identify',
      'reset',
      'group',
      'track',
      'ready',
      'alias',
      'debug',
      'page',
      'once',
      'off',
      'on',
      'addSourceMiddleware',
      'addIntegrationMiddleware',
      'setAnonymousId',
      'addDestinationMiddleware',
    ]
    analytics.factory = function(e: any) {
      return function() {
        var t = Array.prototype.slice.call(arguments)
        t.unshift(e)
        analytics.push(t)
        return analytics
      }
    }
    for (var e = 0; e < analytics.methods.length; e++) {
      var key = analytics.methods[e]
      analytics[key] = analytics.factory(key)
    }
    analytics.load = function(key: string, e: any) {
      var t = document.createElement('script')
      t.type = 'text/javascript'
      t.async = !0
      t.src =
        'https://cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js'
      var n = document.getElementsByTagName('script')[0]
      if (!n.parentNode) {
        throw Error('Unable to inject segment script')
      }
      n.parentNode.insertBefore(t, n)
      analytics._loadOptions = e
    }
    analytics._writeKey = segmentConfig.options.writeKey
    analytics.SNIPPET_VERSION = '4.13.2'
    analytics.load(segmentConfig.options.writeKey)
    analytics.page()

    wasInitialized = true
  }
  return null
}

// @todo required options are not yet possible.
// See: https://github.com/techboi/consent-manager/issues/19
interface SegmentConfig extends IntegrationConfigOptions {
  writeKey?: string // @todo this should be required
}

export function segmentIntegration(options: SegmentConfig): IntegrationConfig {
  const { title, slug, hex, path } = {
    title: 'Segment',
    slug: 'segment',
    hex: '52BD94',
    path:
      'M22.38 7.74H9.26c-.25 0-.45.2-.45.46v1.52c0 .25.2.46.45.46h13.12c.25 0 .45-.2.45-.46V8.2c0-.25-.2-.46-.45-.46zm-8.68 6.08H.58c-.25 0-.45.2-.45.46v1.52c0 .25.2.46.45.46H13.7c.25 0 .45-.2.45-.46v-1.52c0-.25-.2-.46-.45-.46zM1.81 9.4a.46.46 0 00.55-.3 9.57 9.57 0 0111.19-6.44.45.45 0 00.52-.33l.4-1.48a.46.46 0 00-.35-.56A12 12 0 00.02 8.45a.45.45 0 00.32.56l1.47.4zm19.34 5.2a.46.46 0 00-.55.3 9.57 9.57 0 01-11.18 6.44.45.45 0 00-.53.33l-.4 1.48a.45.45 0 00.35.56 12 12 0 0014.1-8.16.45.45 0 00-.31-.56l-1.48-.4zM18.41 5.07a1.33 1.33 0 100-2.66 1.33 1.33 0 000 2.66zM4.55 21.6a1.33 1.33 0 100-2.67 1.33 1.33 0 000 2.66z',
  }
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'Statistics',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://segment.com/legal/privacy/`,
    description: 'We use Segment to improve your browsing experience.',
    WrapperComponent,
    options,
  }
}
