import React from 'react'
import clsx from 'clsx'

import { Styles, ButtonProps } from '.'

export const useDefaultButton = (styles: Styles): React.FC<ButtonProps> => {
  return React.useMemo(() => {
    const DefaultButton: React.FC<ButtonProps> = (props) => (
      <button
        {...props}
        className={clsx(props.className, styles.buttonReset, styles.button)}
      />
    )
    return DefaultButton
  }, [styles])
}
