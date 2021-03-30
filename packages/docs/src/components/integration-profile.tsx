import React from 'react'

import { IntegrationConfig } from '@consent-manager/core'

import styles from './integration-profile.module.css'

interface IntegrationProfileProps {
  integration: IntegrationConfig
}

export const IntegrationProfile: React.FC<IntegrationProfileProps> = ({
  integration,
}) => {
  if (!integration) {
    throw new Error(
      `Unable to create integration profile. Make sure to pass one.`
    )
  }

  const {
    id,
    title,
    Icon,
    color,
    contrastColor,
    description,
    privacyPolicyUrl,
    WrapperComponent,
    enabledByDefault,
  } = integration

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>Title</td>
          <td>{title}</td>
        </tr>
        <tr>
          <td>ID</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Icon</td>
          <td>
            <Icon style={{ width: '2em', height: 'auto' }} />
          </td>
        </tr>
        <tr>
          <td>Brand color</td>
          <td style={{ background: color, color: contrastColor }}>{color}</td>
        </tr>
        <tr>
          <td>Contrast color</td>
          <td style={{ background: contrastColor, color }}>{contrastColor}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{description}</td>
        </tr>
        <tr>
          <td>Privacy policy</td>
          <td>
            <a href={privacyPolicyUrl}>{privacyPolicyUrl}</a>
          </td>
        </tr>
        <tr>
          <td>WrapperComponent</td>
          <td>{WrapperComponent ? '✅' : '⛔️'}</td>
        </tr>
        <tr>
          <td>Enabled by default</td>
          <td>{enabledByDefault ? '✅' : '⛔️'}</td>
        </tr>
      </tbody>
    </table>
  )
}
