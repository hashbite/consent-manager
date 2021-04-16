import React, { useCallback } from 'react'
import {
  useIntegration,
  useDecision,
  FallbackComponentProps,
} from '@consent-manager/core'
import clsx from 'clsx'
import { Trans } from '@lingui/react'
import { IoShieldCheckmark } from '@react-icons/all-files/io5/IoShieldCheckmark'

import { ButtonProps, Styles, IconProps } from '.'
import { IntegrationLabel } from './integration-label'
import defaultStyles from './index.module.css'

interface StyleableFallbackComponentProps extends FallbackComponentProps {
  styles?: Styles
  Button?: React.ComponentType<ButtonProps>
  Icon?: React.ComponentType<IconProps>
}

const DefaultButton: React.FC = props => <button {...props} />

export const FallbackComponent: React.FC<StyleableFallbackComponentProps> = ({
  integrationId,
  Button = DefaultButton,
  styles = defaultStyles,
  Icon = IoShieldCheckmark,
}) => {
  const integration = useIntegration(integrationId)
  const [, setDecision] = useDecision(integrationId)
  const enableIntegration = useCallback(() => {
    setDecision(true)
  }, [setDecision])

  if (!integration) {
    throw new Error(`Integration ${integrationId} could not be found.`)
  }

  return (
    <section className={clsx(styles.fallbackComponent)}>
      <div className={clsx(styles.fallbackComponentContent)}>
        <h1 className={clsx(styles.fallbackComponentTitle)}>
          <Icon className={clsx(styles.fallbackComponentIcon)} />
          <Trans
            id={`consent-manager.fallback.${integrationId}.title`}
            message="Recommended external content"
          />
        </h1>
        <Trans
          id={`consent-manager.fallback.${integrationId}.description`}
          message={[
            '<1>This feature contains content by <0/></1>',
            '<2>To view this third-party content, you first have to accept their specific terms and conditions.</2>',
            '<3>This includes their cookie policies, which we have no control over.</3>',
          ].join('')}
          components={[
            <IntegrationLabel styles={styles} integration={integration} />,
            <p />,
            <p />,
            <p />,
            <p />,
            <p />,
          ]}
        />
        <div className={clsx(styles.fallbackComponentControls)}>
          <Button
            className={clsx(styles.buttonReset, styles.button)}
            onClick={() => enableIntegration()}
          >
            <Trans
              id={`consent-manager.fallback.${integrationId}.learnMore`}
              message="Learn more"
            />
          </Button>
          <Button
            className={clsx(
              styles.buttonReset,
              styles.button,
              styles.buttonPrimary
            )}
            onClick={() => enableIntegration()}
          >
            <Trans
              id={`consent-manager.fallback.${integrationId}.learnMore`}
              message={`Enable ${integration.title}`}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
