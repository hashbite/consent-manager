import React from 'react'
import ReactYouTube from 'react-youtube'

import { PrivacyShield } from '@techboi/privacy-manager'

const YouTube = ({ id, ...props }) => {
  return (
    <PrivacyShield id="youtube">
      <ReactYouTube videoid={id} {...props} />
    </PrivacyShield>
  )
}

export default YouTube