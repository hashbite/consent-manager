import React from 'react'
import { Field } from 'react-final-form'
import clsx from 'clsx'
import { Trans } from '@lingui/react'
import { IntegrationConfigOptions } from '@consent-manager/core'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import defaultStyles from './index.module.css'

export interface IntegrationProps extends IntegrationConfigOptions {
  Switch?: React.ComponentType<SwitchProps>
}

export const Integration: React.FC<IntegrationProps> = ({
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
    <Field name={id} component={Switch} type="checkbox" styles={styles}>
      <div
        className={clsx(styles.integration)}
        style={{
          color: contrastColor,
          backgroundColor: color,
        }}
      >
        <Icon className={clsx(styles.integrationIcon)} />
        <span className={clsx(styles.integrationTitle)}>
          <Trans
            id={`consent-manager.integration.${id}.title`}
            message={title}
          />
        </span>
      </div>
    </Field>
    <p className={clsx(styles.integrationDescription)}>
      <Trans
        id={`consent-manager.integration.${id}.description`}
        message={description}
      />
      <br />
      <Trans
        id={`consent-manager.integration.${id}.privacy-policy`}
        message="<0>Learn more about the privacy policy of <1/>.</0>"
        components={[
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a href={privacyPolicyUrl} rel="noreferrer" target="_blank" />,
          <>{title}</>,
        ]}
      />
    </p>
  </div>
)
