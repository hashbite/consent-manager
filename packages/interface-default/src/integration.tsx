import React from 'react'
import { Field } from 'react-final-form'
import clsx from 'clsx'
import { Trans } from './trans'
import { IntegrationConfigOptions } from '@consent-manager/core'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import { IntegrationLabel } from './integration-label'
import { Styles } from '.'

export interface IntegrationProps extends IntegrationConfigOptions {
  styles: Styles
  Switch?: React.ComponentType<SwitchProps>
}

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
      <h2 className={clsx(styles.integrationFieldCategory)}>
        <Trans
          id={`consent-manager.integration.${id}.category`}
          fallbackId={`consent-manager.integration.default.category`}
          props={{ category }}
        />
      </h2>
      <div className={clsx(styles.integrationFieldCompany)}>
        <Trans
          id={`consent-manager.integration.${id}.company`}
          fallbackId={`consent-manager.integration.default.company`}
          props={{
            IntegrationLabel: () => (
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
              />
            ),
          }}
        />
      </div>
    </Field>
    <div className={clsx(styles.integrationFieldDetails)}>
      <p className={clsx(styles.integrationDescription)}>
        <Trans
          id={`consent-manager.integration.${id}.description`}
          fallbackId={`consent-manager.integration.default.description`}
          props={{ description }}
        />
      </p>
      <p>
        <Trans
          id={`consent-manager.integration.${id}.privacy-policy`}
          fallbackId={`consent-manager.integration.default.privacy-policy`}
          props={{
            Link: ({ children }: { children: React.ReactNode }) => (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a href={privacyPolicyUrl} rel="noreferrer" target="_blank">
                {children}
              </a>
            ),
            title,
          }}
        />
      </p>
    </div>
  </div>
)
