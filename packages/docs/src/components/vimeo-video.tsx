import React from 'react'
import { PrivacyShield } from '@consent-manager/core'

export interface VimeoVideoProps {
  id: string
}

const VimeoVideoRenderer = React.lazy(() =>
  import(/* webpackChunkName: "vimeo-video-player" */ './vimeo-renderer')
)

export const VimeoVideo: React.FC<VimeoVideoProps> = props => (
  <PrivacyShield id="vimeo">
    <React.Suspense fallback={null}>
      <VimeoVideoRenderer {...props} />
    </React.Suspense>
  </PrivacyShield>
)
