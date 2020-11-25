import React from 'react'
import ReactYoutube, { Options } from 'react-youtube'

export const YoutubeVideoRenderer: React.FC<{id: string}> = ({
  id,
  ...props
}) => {
  const opts: Options = {
    width: '100%',
    height: '100%',
    playerVars: { modestbranding: 1, ...props },
  }

  return (
    <ReactYoutube videoId={id} opts={opts} />
  )
}
