import React from 'react'
import clsx from 'clsx'
import { Trans } from './trans'
import { IntegrationConfigOptions } from '@consent-manager/core'

import { Switch as DefaultSwitch, SwitchProps } from './switch'
import { IntegrationLabel } from './integration-label'
import { Styles } from '.'

export interface IntegrationProps extends IntegrationConfigOptions {
  styles: Styles
  Switch?: React.FC<SwitchProps>
  checked: boolean
  onChange: React.ChangeEventHandler
}

const Link: React.FC<{
  children: React.ReactNode
  privacyPolicyUrl: string
}> = ({ children, privacyPolicyUrl }) => (
  <a href={privacyPolicyUrl} rel="noreferrer" target="_blank">
    {children}
  </a>
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
  checked,
  onChange,
}) => (
  <>
    <Switch
      className={clsx(styles.integrationFieldTrigger)}
      onChange={onChange}
      name={id}
      styles={styles}
      checked={checked}
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
    </Switch>
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
                Link: (props) => (
                  <Link privacyPolicyUrl={privacyPolicyUrl} {...props} />
                ),
                title,
              }}
            />
          ),
        }}
      />
    </div>
  </>
)
