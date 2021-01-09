import React from 'react'

import { PrivacyManager, PrivacyManagerForm } from '@techboi/privacy-manager'

// Default implementation, that you can customize
function Root({ children }) {
  const storage = React.useState({
    decisions: {},
  })
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
    <PrivacyManager config={config} store={storage}>
      {children}
      <PrivacyManagerForm />
    </PrivacyManager>
  )
}

export default Root