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

const Link: React.FC<{
  children: React.ReactNode
  privacyPolicyUrl: string
}> = ({ children, privacyPolicyUrl }) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <>
    <a href={privacyPolicyUrl} rel="noreferrer" target="_blank">
      {children}
    </a>
  </>
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
  <>
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
      <Trans
        id={`consent-manager.integration.${id}.description`}
        fallbackId={`consent-manager.integration.default.description`}
        props={{
          description,
          PrivacyPolicyLink: () => (
            <Trans
              id={`consent-manager.integration.${id}.privacy-policy`}
              fallbackId={`consent-manager.integration.default.privacy-policy`}
              props={{
                Link,
                title,
              }}
            />
          ),
        }}
      />
    </div>
  </>
)
