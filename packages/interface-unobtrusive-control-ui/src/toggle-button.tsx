import React from 'react'
import clsx from 'clsx'

import { Styles, ToggleIconProps } from './index'

export interface ToggleButtonProps {
  styles: Styles
  ToggleIcon: React.ComponentType<ToggleIconProps>
  showForm: boolean
  toggleControlForm: Function
  handleSubmit: Function
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  styles,
  ToggleIcon,
  showForm,
  toggleControlForm,
  handleSubmit,
}) => (
  <button
    className={clsx(styles.toggleButton)}
    title={`Toggle website settings visibility`}
    onClick={e => {
      // Auto save on close
      if (showForm) {
        handleSubmit()
      }
      toggleControlForm(e)
    }}
  >
    <div className={clsx(styles.pane, styles.toggleButtonContent)}>
      <ToggleIcon className={clsx(showForm && styles.inverted)} />
    </div>
  </button>
)
