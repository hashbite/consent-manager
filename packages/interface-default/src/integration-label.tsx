import React from 'react'
import clsx from 'clsx'
import { Trans } from './trans'
import { IntegrationConfigOptions } from '@consent-manager/core'

import { Styles } from '.'

interface IntegrationLabelProps {
  styles: Styles
  integration: IntegrationConfigOptions
}

export const IntegrationLabel: React.FC<IntegrationLabelProps> = ({
  styles,
  integration: { contrastColor, color, id, title, Icon },
}) => (
  <span
    className={clsx(styles.integrationLabel)}
    style={{
      color: contrastColor,
      backgroundColor: color,
    }}
  >
    <Icon className={clsx(styles.integrationLabelIcon)} />
    <span className={clsx(styles.integrationLabelTitle)}>
      <Trans
        id={`consent-manager.integration.${id}.title`}
        fallbackId={`consent-manager.integration.default.title`}
        props={{ title }}
      />
    </span>
  </span>
)
