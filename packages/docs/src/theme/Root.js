import React from 'react'

import { ConsentManager, ConsentManagerForm } from '@consent-manager/core'
import createPersistedState from 'use-persisted-state'

import { youTubeIntegration } from '@consent-manager/integration-youtube'
import { matomoIntegration } from '@consent-manager/integration-matomo'

import {
  UnobtrusiveConsentControlUI,
  FallbackComponent,
} from '@consent-manager/interface-default'
import '@consent-manager/interface-default/dist/default.min.css'

const Button = props => (
  <button
    type="submit"
    className="button button--primary button--block"
    {...props}
  >
    Save
  </button>
)
const useConsentStateStore = createPersistedState('consent-manager-docs')

// Default implementation, that you can customize
function Root({ children }) {
  const storage = useConsentStateStore()
  const config = {
    integrations: [
      youTubeIntegration(),
      matomoIntegration({
        matomoURL: 'https://trackboi.techboi.io/',
        siteID: 11,
      }),
    ],
  }

  return (
    <ConsentManager
      config={config}
      store={storage}
      fallbackComponent={props => (
        <FallbackComponent {...props} Button={Button} />
      )}
    >
      {children}
      <ConsentManagerForm
        formComponent={UnobtrusiveConsentControlUI}
        SubmitButton={Button}
      />
    </ConsentManager>
  )
}

export default Root
