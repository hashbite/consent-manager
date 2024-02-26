import React from 'react'
import clsx from 'clsx'

import { Styles } from '.'
export interface SwitchProps {
  children: React.ReactNode
  className: string
  defaultChecked: boolean
  name: string
  styles: Styles
  onChange: React.ChangeEventHandler
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  defaultChecked,
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
          defaultChecked={defaultChecked}
          onChange={onChange}
          className={styles.switchInput}
        />
        <div
          className={clsx(
            styles.switchSlide,
            defaultChecked && styles.switchSlideEnabled
          )}
        />
        <div
          className={clsx(
            styles.switchNodge,
            defaultChecked && styles.switchNodgeEnabled
          )}
        />
      </div>
      <div className={styles.switchContent}>{children} </div>
    </label>
  )
}
