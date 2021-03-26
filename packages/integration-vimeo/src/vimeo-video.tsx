import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

import { PrivacyShield } from '@consent-manager/core'

interface VimeoVideoProps {
  id: string
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ id, ...props }) => {
  return (
    <PrivacyShield id="vimeo">
      <Vimeo className="video" video={id} {...props} />
    </PrivacyShield>
  )
}

export default VimeoVideo
