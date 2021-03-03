import React, { useCallback } from 'react'
import { useIntegration, useDecision } from '@techboi/consent-manager'
import clsx from 'clsx'

import styles from './fallback-component.module.css'

export function CustomFallbackComponent({ integrationId }) {
  const integration = useIntegration(integrationId)
  const [, setDecision] = useDecision(integrationId)
  const enableIntegration = useCallback(() => {
    setDecision(true)
  }, [setDecision])

  return (
    <div className={clsx(styles.container)}>
      <h2>Recommended Content!</h2>
      <p>
        We'd like to show you some content via {integration.title}. To protect
        your privacy, we disabled it by default.
      </p>
      <p>{integration.description}</p>
      <p>
        <a href={integration.privacyPolicyUrl} rel="noreferrer" target="_blank">
          Learn more about the privacy policy of {integration.title}
        </a>
      </p>
      <button
        className={clsx(styles.button, 'button button--primary button--block')}
        onClick={() => enableIntegration()}
      >
        Enable {integration.title}
      </button>
    </div>
  )
}
