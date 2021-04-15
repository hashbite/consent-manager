import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Styles } from '.'
export interface SwitchProps extends FieldRenderProps<string, any> {
  styles: Styles
  enabledColor?: string
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  input,
  meta,
  styles,
  enabledColor = '#48bb78',
  ...rest
}) => {
  const key = `switch-${input.name}`

  return (
    <label htmlFor={key} className={styles.switchLabel} {...rest}>
      <div className={styles.switchWrapper}>
        <input id={key} {...input} className={styles.switchInput} />
        <div
          className={styles.switchSlide}
          style={{
            backgroundColor: input.checked ? enabledColor : undefined,
          }}
        />
        <div
          className={styles.switchNodge}
          style={{
            transform: input.checked ? 'translateX(100%)' : undefined,
          }}
        />
      </div>
      <div className={styles.switchContent}>{children} </div>
    </label>
  )
}
