import React, { MouseEvent, useContext } from 'react'
import clsx from 'clsx'

import { Styles, IconProps } from './index'

import { ConsentManagerDefaultInterfaceContext } from './context'

export interface ToggleButtonProps {
  styles: Styles
  animationStyles?: Styles
  ToggleIcon: React.FC<IconProps>
  toggleControlForm: (e: MouseEvent) => void
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  styles,
  ToggleIcon,
  toggleControlForm
}) => {
  const { formVisible } = useContext(ConsentManagerDefaultInterfaceContext)
  return (
    <button
      hidden={!formVisible}
      className={clsx(styles.toggleButton)}
      title={`Toggle website settings visibility`}
      onClick={(e) => toggleControlForm(e)}
    >
      <div className={clsx(styles.toggleButtonContent)}>
        <ToggleIcon className={clsx(styles.toggleButtonIcon)} />
      </div>
    </button>
  )
}
