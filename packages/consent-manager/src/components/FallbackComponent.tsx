import React from 'react'

import { FallbackComponentProps } from '../config'
import { useIntegration } from '../integrations'

export const FallbackComponent: React.FC<FallbackComponentProps> = ({
  integrationId,
  fallbackUrl,
  ...props
}) => {
  const integration = useIntegration(integrationId)

  if (!integration) {
    throw new Error(`No integration found for "${integrationId}"`)
  }

  const { title, privacyPolicyUrl, Icon, description } = integration

  return (
    <section
      style={{
        backgroundColor: '#ddd',
        padding: '0 2em',
        border: '4px solid #222',
      }}
      {...props}
    >
      <h1 style={{ display: 'flex-inline' }}>
        {Icon && <Icon aria-hidden="true" />}
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
