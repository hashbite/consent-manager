import React, { useState } from 'react'
import {
  ConsentManager,
  ConsentManagerForm,
  ConsentManagerProps,
} from '@consent-manager/core'

import { IoShieldCheckmark } from '@react-icons/all-files/io5/IoShieldCheckmark'

import defaultStyles from './index.module.css'
import { useDefaultButton } from './default-button'
import { Interface } from './interface'
import { FallbackComponent } from './fallback-component'
import { ConsentManagerDefaultInterfaceContext } from './context'
import { Messages, defaultMessages } from './i18n'
import { ToggleButtonProps } from './toggle-button'
import { SwitchProps } from './switch'
import { ConsentFormProps } from './form'

export * from './i18n'
export { ToggleButtonProps, SwitchProps, ConsentFormProps }

export interface Styles {
  [key: string]: string
}

export interface IconProps {
  [key: string]: unknown
}

export interface ButtonProps {
  [key: string]: unknown
  className?: string
}

export interface ConsentManagerDefaultInterfaceDesignProps {
  useDefaultButtonForIntroduction?: boolean
  slideDuration?: number
  styles?: Styles
  animationStyles?: Styles
  ToggleButton?: React.ComponentType<ToggleButtonProps>
  ToggleIcon?: React.ComponentType<IconProps>
  CloseIcon?: React.ComponentType<IconProps>
  Switch?: React.ComponentType<SwitchProps>
  Button?: React.ComponentType<ButtonProps>
  Form?: React.ComponentType<ConsentFormProps>
}

interface ConsentManagerDefaultInterfaceProps
  extends ConsentManagerProps,
    ConsentManagerDefaultInterfaceDesignProps {
  messages?: Messages
}

export const ConsentManagerDefaultInterface: React.FC<ConsentManagerDefaultInterfaceProps> = ({
  messages = defaultMessages,
  children,
  config,
  store,
  styles = defaultStyles,
  ToggleIcon = IoShieldCheckmark,
  Button,
  ...rest
}) => {
  const [formVisible, setFormVisible] = useState(false)

  // Extend user styles
  styles = { ...defaultStyles, ...styles }

  const DefaultButton = useDefaultButton(styles)
  const props = { styles, ToggleIcon, Button: Button || DefaultButton, ...rest }

  // Extend user messages by default messages
  messages = { ...defaultMessages, ...messages }

  return (
    <ConsentManager
      config={config}
      store={store}
      fallbackComponent={fallbackProps => (
        <FallbackComponent
          {...props}
          {...fallbackProps}
          Button={Button || DefaultButton}
          styles={styles}
          ToggleIcon={ToggleIcon}
        />
      )}
    >
      <ConsentManagerDefaultInterfaceContext.Provider
        value={{ formVisible, setFormVisible, messages }}
      >
        {children}
        <ConsentManagerForm
          formComponent={Interface}
          id="consent-manager-default-interface"
          {...props}
        />
      </ConsentManagerDefaultInterfaceContext.Provider>
    </ConsentManager>
  )
}
