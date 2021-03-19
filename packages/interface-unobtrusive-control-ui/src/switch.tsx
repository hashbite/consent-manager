import React from 'react'
import { FieldRenderProps } from 'react-final-form'

import styles from './switch.module.css'

export interface SwitchProps extends FieldRenderProps<string, any> {
  enabledColor?: string
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  input,
  meta,
  enabledColor = '#48bb78',
  ...rest
}) => {
  const key = `switch-${input.name}`

  return (
    <label htmlFor={key} className={styles.label} {...rest}>
      <div className={styles.switchWrapper}>
        <input id={key} {...input} className={styles.input} />
        <div
          className={styles.slide}
          style={{
            backgroundColor: input.checked ? enabledColor : undefined,
          }}
        />
        <div
          className={styles.nodge}
          style={{
            transform: input.checked ? 'translateX(100%)' : undefined,
          }}
        />
      </div>
      <div className={styles.content}>{children} </div>
    </label>
  )
}
