import React from 'react'
import ReactYouTube from 'react-youtube'

import { YoutubeVideoProps } from './youtube-video'

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ id, ...props }) => (
  <ReactYouTube className="video" videoId={id} {...props} />
)

export default YoutubeVideo
