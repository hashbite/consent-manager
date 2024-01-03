import React from 'react'
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
import { demoIntegration } from './demo-integration'

import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default'
import {
  ConsentManagerConfig,
  ConsentManagerStorageState,
} from '@consent-manager/core'
import '@consent-manager/interface-default/dist/default.min.css'

const useConsentStateStore = createPersistedState<ConsentManagerStorageState>(
  'consent-manager-docs'
)

// Default implementation, that you can customize
function Root({ children }: { children: React.ReactNode }) {
  const storage = useConsentStateStore()
  const config: ConsentManagerConfig = {
    integrations: [
      matomoPrivacyAwareIntegration({
        matomoURL: 'https://statistics.hashbite.net/',
        siteID: '11',
      }),
      youtubeIntegration(),
      vimeoIntegration(),
      mapboxIntegration(),
      algoliaIntegration(),
      segmentIntegration({ writeKey: 'djRstXTYDzn36y2zIzQOQMAFFv4du1D9' }),
      googleAnalyticsIntegration({ trackingId: 'UA-193594205-2' }),
      googleTagManagerIntegration({ gtmId: 'GTM-PPHGBCL' }),
      hubspotIntegration({ hubId: '19627404' }),
      linkedinIntegration({ partnerId: '2990578' }),
      demoIntegration(),
    ],
    onChangeDecision: (last, next) => {
      const changed: { [key: string]: boolean } = {}
      Object.keys(next).forEach((key) => {
        if (last[key] !== next[key]) {
          changed[key] = next[key]
        }
      })
      console.log('New user decisions:', changed)
    },
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
