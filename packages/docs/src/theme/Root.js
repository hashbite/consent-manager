import React from 'react'

import { ConsentManager, ConsentManagerForm } from '@techboi/consent-manager'
import createPersistedState from 'use-persisted-state'

import { youTubeIntegration } from '@techboi/consent-manager-integration-youtube'
import { matomoIntegration } from '@techboi/consent-manager-integration-matomo'

import {
  UnobtrusiveConsentControlUI,
  FallbackComponent,
} from '@techboi/consent-manager-interface-unobtrusive-control-ui'
import '@techboi/consent-manager-interface-unobtrusive-control-ui/dist/unobtrusive-control-ui.min.css'

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
      fallbackComponent={FallbackComponent}
    >
      {children}
      <ConsentManagerForm
        formComponent={UnobtrusiveConsentControlUI}
        Button={Button}
      />
    </ConsentManager>
  )
}

export default Root
