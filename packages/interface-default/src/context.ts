import React, { Dispatch, SetStateAction } from 'react'
import { Messages } from './index'

interface ConsentManagerDefaultInterfaceContextValue {
  formVisible: boolean
  setFormVisible: Dispatch<SetStateAction<boolean>>
  messages: Messages
}

export const ConsentManagerDefaultInterfaceContext =
  React.createContext<ConsentManagerDefaultInterfaceContextValue>({
    formVisible: false,
    setFormVisible: () => {},
    messages: {
      'consent-manager.integration.default.company': () => null,
      'consent-manager.fallback.default.description': () => null,
      'consent-manager.integration.default.title': () => null,
      'consent-manager.integration.default.privacy-policy': () => null,
      'consent-manager.integration.default.category': () => null,
      'consent-manager.integration.default.description': () => null,
      'consent-manager.fallback.default.enable': () => null,
    },
  })
