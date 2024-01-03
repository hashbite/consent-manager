import React, { useCallback, useContext } from 'react'
import {
  useIntegration,
  useDecision,
  FallbackComponentProps,
} from '@consent-manager/core'
import clsx from 'clsx'
import { Trans } from './trans'

import { ButtonProps, Styles, IconProps } from '.'
import { IntegrationLabel } from './integration-label'
import { ConsentManagerDefaultInterfaceContext } from './context'

interface StyleableFallbackComponentProps extends FallbackComponentProps {
  styles: Styles
  Button: React.FC<ButtonProps>
  ToggleIcon: React.FC<IconProps>
}

export const FallbackComponent: React.FC<StyleableFallbackComponentProps> = ({
  integrationId,
  Button,
  styles,
  ToggleIcon,
}) => {
  const { setFormVisible } = useContext(ConsentManagerDefaultInterfaceContext)
  const integration = useIntegration(integrationId)
  const [, setDecision] = useDecision(integrationId)
  const enableIntegration = useCallback(() => {
    setDecision(true)
  }, [setDecision])

  if (!integration) {
    throw new Error(`Integration ${integrationId} could not be found.`)
  }

  const { category, title } = integration

  return (
    <section className={clsx(styles.fallbackComponent)}>
      <div className={clsx(styles.fallbackComponentContent)}>
        <h1 className={clsx(styles.fallbackComponentTitle)}>
          <ToggleIcon
            className={clsx(styles.icon, styles.fallbackComponentIcon)}
          />
          <Trans
            id={`consent-manager.fallback.${integrationId}.title`}
            fallbackId={`consent-manager.fallback.default.title`}
          />
        </h1>
        <Trans
          id={`consent-manager.fallback.${integrationId}.description`}
          fallbackId={`consent-manager.fallback.default.description`}
          props={{
            IntegrationLabel: () => (
              <IntegrationLabel styles={styles} integration={integration} />
            ),
            category,
            title,
          }}
        />
        <div className={clsx(styles.fallbackComponentControls)}>
          <Button onClick={() => setFormVisible(true)}>
            <Trans
              id={`consent-manager.fallback.${integrationId}.learn-more`}
              fallbackId={`consent-manager.fallback.default.learn-more`}
            />
          </Button>
          <Button
            data-button-style="primary"
            onClick={() => enableIntegration()}
          >
            <Trans
              id={`consent-manager.fallback.${integrationId}.enable`}
              fallbackId={`consent-manager.fallback.default.enable`}
              props={{
                category,
                title,
              }}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
