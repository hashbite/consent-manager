import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ConsentManager, ConsentManagerForm } from '@techboi/consent-manager'
import createPersistedState from 'use-persisted-state'

import { youTubeIntegration } from '@techboi/consent-manager-integration-youtube'

import { CustomFallbackComponent } from '../components/fallback-component'
import { BottomBarConsentForm } from '../components/bottom-bar-consent-form'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#17b897',
    },
  },
})

const useConsentStateStore = createPersistedState('consent-manager-docs')

// Default implementation, that you can customize
function Root({ children }) {
  const storage = useConsentStateStore()
  const config = {
    integrations: [youTubeIntegration()],
  }

  return (
    <ThemeProvider theme={theme}>
      <ConsentManager
        config={config}
        store={storage}
        fallbackComponent={CustomFallbackComponent}
      >
        {children}
        <ConsentManagerForm formComponent={BottomBarConsentForm} />
      </ConsentManager>
    </ThemeProvider>
  )
}

export default Root
