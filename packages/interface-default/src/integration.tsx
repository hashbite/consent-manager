import React from 'react'
import { Field } from 'react-final-form'
import clsx from 'clsx'
import { Trans } from '@lingui/react'
import { IntegrationConfigOptions } from '@consent-manager/core'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import { Styles } from '.'

export interface IntegrationProps extends IntegrationConfigOptions {
  styles: Styles
  Switch?: React.ComponentType<SwitchProps>
}

interface IntegrationLabelProps {
  styles: Styles
  integration: IntegrationConfigOptions
}

const IntegrationLabel: React.FC<IntegrationLabelProps> = ({
  styles,
  integration: { contrastColor, color, id, title, Icon },
}) => (
  <div
    className={clsx(styles.integrationLabel)}
    style={{
      color: contrastColor,
      backgroundColor: color,
    }}
  >
    <Icon className={clsx(styles.integrationLabelIcon)} />
    <span className={clsx(styles.integrationLabelTitle)}>
      <Trans id={`consent-manager.integration.${id}.title`} message={title} />
    </span>
  </div>
)

export const Integration: React.FC<IntegrationProps> = ({
  styles,
  Switch = DefaultSwitch,
  id,
  category,
  title,
  description,
  privacyPolicyUrl,
  color,
  contrastColor,
  Icon,
}) => (
  <div className={clsx(styles.integrationField)} key={id}>
    <Field
      className={clsx(styles.integrationFieldTrigger)}
      name={id}
      component={Switch}
      type="checkbox"
      styles={styles}
    >
      <h2 className={clsx(styles.integrationFieldTitle)}>
        <Trans
          id={`consent-manager.integration.${id}.title`}
          message={category}
        />
      </h2>
      <div className={clsx(styles.integrationFieldCompany)}>
        <Trans
          id={`consent-manager.integration.${id}.company`}
          message={'by <0/>'}
          components={[
            <IntegrationLabel
              styles={styles}
              integration={{
                id,
                category,
                title,
                description,
                privacyPolicyUrl,
                color,
                contrastColor,
                Icon,
              }}
            />,
          ]}
        />
      </div>
    </Field>
    <div className={clsx(styles.integrationFieldDetails)}>
      <p className={clsx(styles.integrationDescription)}>
        <Trans
          id={`consent-manager.integration.${id}.description`}
          message={description}
        />
      </p>
      <p>
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
  </div>
)
