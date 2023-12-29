import React from 'react'
import { PrivacyShield } from '@consent-manager/core'

export interface YoutubeVideoProps {
  id: string
}

const YoutubeVideoRenderer = React.lazy(
  () =>
    import(/* webpackChunkName: "youtube-video-player" */ './youtube-renderer')
)

export const YoutubeVideo: React.FC<YoutubeVideoProps> = (props) => (
  <div style={{ margin: '0 auto', maxWidth: '600px' }}>
    <PrivacyShield id="youtube">
      <React.Suspense fallback={null}>
        <YoutubeVideoRenderer {...props} />
      </React.Suspense>
    </PrivacyShield>
  </div>
)
