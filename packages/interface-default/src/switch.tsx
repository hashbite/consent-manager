import React from 'react'
import clsx from 'clsx'
import { FieldRenderProps } from 'react-final-form'

import { Styles } from '.'
export interface SwitchProps extends FieldRenderProps<string, any> {
  styles: Styles
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  input,
  meta,
  styles,
  ...rest
}) => {
  const key = `switch-${input.name}`

  return (
    <label htmlFor={key} className={styles.switchLabel} {...rest}>
      <div className={styles.switchWrapper}>
        <input id={key} {...input} className={styles.switchInput} />
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
