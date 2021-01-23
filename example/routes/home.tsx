import * as React from 'react'
import { useRedBoxLtd } from '../integrations/tracker-red-box-ltd'

export default function RouteHome() {
  const { trackEvent, isEnabled } = useRedBoxLtd()

  return (
    <>
      <h1>Welcome to the example page</h1>
      <p>
        The home page demonstrates integrations that gather statistics about the
        user.
      </p>
      <p>
        Switch to the video subroute to see the social media privacy shield in
        action.
      </p>
      <button onClick={() => trackEvent('click', 'watching', 'you', 'closely')}>
        Do not click here -{' '}
        {isEnabled ? 'we will track you' : 'nothing will happen'}
      </button>
    </>
  )
}
