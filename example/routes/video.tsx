import * as React from 'react'

import { PrivacyShield } from '@techboi/consent-manager'

const VideoPlatform: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      style={{
        backgroundColor: 'darkblue',
        color: 'white',
        border: '4px solid black',
        padding: '2em',
      }}
    >
      Video component with id <pre>{id}</pre>
    </div>
  )
}

export default function RouteVideo() {
  return (
    <>
      <h1>Editorial video content:</h1>
      <div data-testid="consent-manager-privacy-shield">
        <PrivacyShield id="video-platform">
          <VideoPlatform id="rick-roll" />
        </PrivacyShield>
      </div>
    </>
  )
}
