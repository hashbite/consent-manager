import React from 'react'
import clsx from 'clsx'

import { Styles } from '.'
export interface SwitchProps {
  children: React.ReactNode
  className: string
  checked: boolean
  name: string
  styles: Styles
  onChange: React.ChangeEventHandler
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  checked,
  className,
  name,
  styles,
  onChange,
  ...rest
}) => {
  const key = `switch-${name}`

  return (
    <label
      htmlFor={key}
      className={clsx(className, styles.switchLabel)}
      {...rest}
    >
      <div className={styles.switchWrapper}>
        <input
          id={key}
          name={name}
          type="checkbox"
          defaultChecked={checked}
          onChange={onChange}
          className={styles.switchInput}
        />
        <div
          className={clsx(
            styles.switchSlide,
            checked && styles.switchSlideEnabled
          )}
        />
        <div
          className={clsx(
            styles.switchNodge,
            checked && styles.switchNodgeEnabled
          )}
        />
      </div>
      <div className={styles.switchContent}>{children} </div>
    </label>
  )
}
