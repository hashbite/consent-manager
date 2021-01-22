import * as React from 'react'

import { PrivacyShield } from '@techboi/consent-manager'

const VideoPlatform: React.FC<{ id: string }> = ({ id, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: 'darkblue',
        color: 'white',
        border: '4px solid black',
        padding: '2em',
      }}
      {...props}
    >
      Video component with id <pre>{id}</pre>
    </div>
  )
}

export default function RouteVideo() {
  return (
    <>
      <h1>Editorial video content:</h1>
      <PrivacyShield
        id="video-platform"
        data-testid="consent-manager-privacy-shield"
      >
        <VideoPlatform
          id="rick-roll"
          data-testid="consent-manager-video-component"
        />
      </PrivacyShield>
    </>
  )
}
