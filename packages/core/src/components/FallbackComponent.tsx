import React, { useCallback } from 'react'

import { FallbackComponentProps } from '../config'
import { useIntegration } from '../index'
import { useDecision } from '../index'

export const FallbackComponent: React.FC<FallbackComponentProps> = ({
  integrationId,
  fallbackUrl,
  ...props
}) => {
  const integration = useIntegration(integrationId)
  const [, setDecision] = useDecision(integrationId)
  const enableIntegration = useCallback(() => {
    setDecision(true)
  }, [setDecision])

  if (!integration) {
    throw new Error(`No integration found for "${integrationId}"`)
  }

  const { title, privacyPolicyUrl, Icon, description, color } = integration

  return (
    <section
      style={{
        backgroundColor: '#ddd',
        padding: '1rem 2rem',
        border: '4px solid #222',
      }}
      {...props}
    >
      <h1 style={{ display: 'flex', alignItems: 'center' }}>
        {Icon && (
          <Icon
            aria-hidden="true"
            color={color}
            style={{ width: '2rem', marginRight: '1rem' }}
          />
        )}
        {title}
      </h1>
      {description && <p>{description}</p>}
      {privacyPolicyUrl && (
        <p>
          <a href={privacyPolicyUrl} target="_blank" rel="noreferrer">
            Privacy policy of {title}
          </a>
        </p>
      )}

      <button
        onClick={() => enableIntegration()}
        style={{ display: 'block', margin: '0 auto' }}
      >
        Enable {integration.title}
      </button>
      {fallbackUrl && (
        <p>
          Alternative:
          <br />
          Visit{' '}
          <a href={fallbackUrl} target="_blank" rel="noreferrer">
            {fallbackUrl}
          </a>
        </p>
      )}
    </section>
  )
}
