import * as React from 'react'
import { useRedBoxLtd } from '../integrations/tracker-red-box-ltd'
import { useDecision } from '@consent-manager/core'

export default function RouteHome() {
  const redBoxLtdTracker = useRedBoxLtd()
  const [isEnabled] = useDecision('red-box-ltd')

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
      <button
        onClick={() =>
          redBoxLtdTracker &&
          redBoxLtdTracker.push([
            'event',
            'click',
            'watching',
            'you',
            'closely',
          ])
        }
        data-testid="example-button"
      >
        Do not click here -{' '}
        {isEnabled ? 'we will track you' : 'nothing will happen'}
      </button>
    </>
  )
}
