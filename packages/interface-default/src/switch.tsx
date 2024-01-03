import React from 'react'
import clsx from 'clsx'
import { FieldRenderProps } from 'react-final-form'

import { Styles } from '.'
export interface SwitchProps extends FieldRenderProps<boolean, HTMLElement> {
  styles: Styles
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  input,
  styles,
  ...rest
}) => {
  const key = `switch-${input.name}`

  return (
    <label htmlFor={key} className={styles.switchLabel} {...rest}>
      <div className={styles.switchWrapper}>
        <input
          id={key}
          {...input}
          value={undefined}
          className={styles.switchInput}
        />
        <div
          className={clsx(
            styles.switchSlide,
            input.checked && styles.switchSlideEnabled
          )}
        />
        <div
          className={clsx(
            styles.switchNodge,
            input.checked && styles.switchNodgeEnabled
          )}
        />
      </div>
      <div className={styles.switchContent}>{children} </div>
    </label>
  )
}
