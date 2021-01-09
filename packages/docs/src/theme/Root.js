import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { PrivacyManager, PrivacyManagerForm } from '@techboi/privacy-manager'
import createPersistedState from 'use-persisted-state'

import { CustomFallbackComponent } from '../components/fallback-component'
import styles from '../css/custom.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#17b897',
    },
  },
})

const useConsentStateStore = createPersistedState('privacy-manager-docs')

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
      <PrivacyManager
        config={config}
        store={storage}
        fallbackComponent={CustomFallbackComponent}
      >
        {children}
        <PrivacyManagerForm />
      </PrivacyManager>
    </ThemeProvider>
  )
}

export default Root
