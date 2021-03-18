import React from 'react'
import { Field } from 'react-final-form'
import clsx from 'clsx'

import { IntegrationConfigOptions } from '@techboi/consent-manager'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import defaultStyles from './index.module.css'

export interface IntgrationProps extends IntegrationConfigOptions {
  Switch: React.ComponentType<SwitchProps>
}

export const Integration: React.FC<IntgrationProps> = ({
  styles = defaultStyles,
  Switch = DefaultSwitch,
  id,
  title,
  description,
  privacyPolicyUrl,
  color,
  contrastColor,
  Icon,
}) => (
  <div className={clsx(styles.formControl)} key={id}>
    <Field name={id} component={Switch}>
      <div
        className={clsx(styles.integration)}
        style={{
          color: contrastColor,
          backgroundColor: color,
        }}
      >
        <Icon className={clsx(styles.integrationIcon)} />
        <span className={clsx(styles.integrationTitle)}>{title}</span>
      </div>
    </Field>
    <p className={clsx(styles.integrationDescription)}>
      {description}
      <br />
      <a href={privacyPolicyUrl} rel="noreferrer" target="_blank">
        Learn more about the privacy policy of {title}
      </a>
    </p>
  </div>
)
