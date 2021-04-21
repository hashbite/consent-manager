import React, { useState } from 'react'
import {
  ConsentManager,
  ConsentManagerForm,
  ConsentManagerProps,
} from '@consent-manager/core'

import { Interface, InterfaceProps } from './interface'
import { FallbackComponent } from './fallback-component'
import { ConsentManagerDefaultInterfaceContext } from './context'
import { Messages, defaultMessages } from './i18n'

export { ToggleButtonProps } from './toggle-button'
export { InterfaceProps, ButtonProps, IconProps } from './interface'
export * from './i18n'

export interface Styles {
  [key: string]: string
}

// Copy of https://github.com/lingui/js-lingui/blob/main/packages/core/src/i18n.ts#L43

interface ConsentManagerDefaultInterfaceProps
  extends InterfaceProps,
    ConsentManagerProps {
  messages: Messages
}

export const ConsentManagerDefaultInterface: React.FC<ConsentManagerDefaultInterfaceProps> = ({
  messages = defaultMessages,
  children,
  config,
  store,
  ...props
}) => {
  const [formVisible, setFormVisible] = useState(false)

  // Extend user messages by default messages
  messages = { ...defaultMessages, ...messages }

  return (
    <ConsentManager
      config={config}
      store={store}
      fallbackComponent={fallbackProps => (
        <FallbackComponent {...props} {...fallbackProps} />
      )}
    >
      <ConsentManagerDefaultInterfaceContext.Provider
        value={{ formVisible, setFormVisible, messages }}
      >
        {children}
        <ConsentManagerForm formComponent={Interface} {...props} />
      </ConsentManagerDefaultInterfaceContext.Provider>
    </ConsentManager>
  )
}
