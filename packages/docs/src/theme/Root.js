import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ConsentManager, ConsentManagerForm } from '@techboi/consent-manager'
import createPersistedState from 'use-persisted-state'

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
    integrations: [
      {
        id: 'youtube',
        title: 'YouTube',
        description:
          'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
      },
    ],
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
