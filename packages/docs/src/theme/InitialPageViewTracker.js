import { useEffect } from 'react'

import {
  useMatomo,
  trackPageViewSPA,
} from '@consent-manager/integration-matomo'
import { useSegment } from '@consent-manager/integration-segment'
import { useGoogleAnalytics } from '@consent-manager/integration-google-analytics'

// Ensure we do this only once per runtime
let trackedMatomo = false
let trackedSegment = false
let trackedGoogleAnalytics = false

export const InitialPageViewTracker = () => {
  const { location } = window

  const matomo = useMatomo()
  useEffect(() => {
    if (matomo && !trackedMatomo) {
      trackPageViewSPA({ matomo, location })
      trackedMatomo = true
    }
  }, [location, matomo])

  const ReactGA = useGoogleAnalytics()
  useEffect(() => {
    if (ReactGA && ReactGA.pageview && !trackedGoogleAnalytics) {
      ReactGA.pageview(location.pathname + location.search)
      trackedGoogleAnalytics = true
    }
  }, [location, ReactGA])

  // Segment automatically tracks page view
  // @todo how to avoid duplication? some frameworks execute route update hook on initial view, others not (and initial call might not be late enough!)

  return null
}
