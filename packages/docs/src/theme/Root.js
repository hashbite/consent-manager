import React from 'react'
import clsx from 'clsx'
import { MDXProvider } from '@mdx-js/react'

import { IntegrationProfile } from '../components/integration-profile'

import createPersistedState from 'use-persisted-state'

import { mapboxIntegration } from '@consent-manager/integration-mapbox'
import { matomoPrivacyAwareIntegration } from '@consent-manager/integration-matomo'
import { vimeoIntegration } from '@consent-manager/integration-vimeo'
import { youtubeIntegration } from '@consent-manager/integration-youtube'
import { algoliaIntegration } from '@consent-manager/integration-algolia'
import { segmentIntegration } from '@consent-manager/integration-segment'
import { googleAnalyticsIntegration } from '@consent-manager/integration-google-analytics'
import { googleTagManagerIntegration } from '@consent-manager/integration-google-tag-manager'
import { hubspotIntegration } from '@consent-manager/integration-hubspot'
import { linkedinIntegration } from '@consent-manager/integration-linkedin'

import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default'
import '@consent-manager/interface-default/dist/default.min.css'

const useConsentStateStore = createPersistedState('consent-manager-docs')

// Default implementation, that you can customize
function Root({ children }) {
  const storage = useConsentStateStore()
  const config = {
    integrations: [
      matomoPrivacyAwareIntegration({
        matomoURL: 'https://trackboi.techboi.io/',
        siteID: 11,
      }),
      youtubeIntegration(),
      vimeoIntegration(),
      mapboxIntegration(),
      algoliaIntegration(),
      segmentIntegration({ writeKey: 'djRstXTYDzn36y2zIzQOQMAFFv4du1D9' }),
      googleAnalyticsIntegration({ trackingId: 'UA-193594205-2' }),
      googleTagManagerIntegration({ gtmId: 'GTM-PPHGBCL' }),
      hubspotIntegration({ hubId: 19627404 }),
      linkedinIntegration({ partnerId: 2990578 }),
    ],
  }

  return (
    <MDXProvider components={{ IntegrationProfile }}>
      <ConsentManagerDefaultInterface config={config} store={storage}>
        {children}
      </ConsentManagerDefaultInterface>
    </MDXProvider>
  )
}

export default Root
