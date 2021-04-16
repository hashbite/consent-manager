import React from 'react'
import ReactYouTube from 'react-youtube'

import { YoutubeVideoProps } from './youtube-video'

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ id, ...props }) => (
  <div className="youtubeContainer">
    <ReactYouTube videoId={id} {...props} />
  </div>
)

export default YoutubeVideo
