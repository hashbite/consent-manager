import React, { useMemo } from 'react'
import { ConsentManagerForm } from '@consent-manager/core'
import {
  setupI18n,
  Locale,
  Locales,
  AllMessages,
  AllLocaleData,
} from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { I18n } from '@lingui/core'

import { Interface, InterfaceProps } from './interface'

export { ToggleButtonProps } from './toggle-button'
export { InterfaceProps, ButtonProps, IconProps } from './interface'

export interface Styles {
  [key: string]: string
}

// Copy of https://github.com/lingui/js-lingui/blob/main/packages/core/src/i18n.ts#L43
interface setupI18nProps {
  locale?: Locale
  locales?: Locales
  messages?: AllMessages
  localeData?: AllLocaleData
  missing?: string | ((message: any, id: any) => string)
}

interface ConsentManagerDefaultInterfaceProps extends InterfaceProps {
  linguiConfig: setupI18nProps
  i18n: I18n
}

export const ConsentManagerDefaultInterface: React.FC<ConsentManagerDefaultInterfaceProps> = ({
  i18n,
  linguiConfig = {
    locale: 'en',
    // By defining messages for the en locale you can override the default copy
    // messages: { en: { 'consent-manager.form.title': 'Privacy Settings' } },
  },
  children,
  ...props
}) => {
  // Use custom i18n instance for multi locale support or use default setup
  const i18nInstance = useMemo(() => {
    return i18n || setupI18n(linguiConfig)
  }, [linguiConfig, i18n])

  return (
    <I18nProvider i18n={i18nInstance}>
      {children}
      <ConsentManagerForm formComponent={Interface} {...props} />
    </I18nProvider>
  )
}

export { FallbackComponent } from './fallback-component'
