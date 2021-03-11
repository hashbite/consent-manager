import React from 'react'
import ReactYouTube from 'react-youtube'

import { PrivacyShield } from '@techboi/consent-manager'

interface YouTubeVideoProps {
  id: string
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ id, ...props }) => {
  return (
    <PrivacyShield id="youtube">
      <ReactYouTube className="video" videoId={id} {...props} />
    </PrivacyShield>
  )
}

export default YouTubeVideo
