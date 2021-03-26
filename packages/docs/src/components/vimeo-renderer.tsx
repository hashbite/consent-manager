import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

import { VimeoVideoProps } from './vimeo-video'

const VimeoVideo: React.FC<VimeoVideoProps> = ({ id, ...props }) => (
  <Vimeo className="video" video={id} {...props} />
)

export default VimeoVideo
