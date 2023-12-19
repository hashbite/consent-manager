import React, { MouseEvent, useContext } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import { Styles, IconProps } from './index'

import defaultAnimationStyles from './animation-slide-out.module.css'
import { ConsentManagerDefaultInterfaceContext } from './context'

export interface ToggleButtonProps {
  styles: Styles
  animationStyles?: Styles
  ToggleIcon: React.ComponentType<IconProps>
  toggleControlForm: (e: MouseEvent) => void
  slideDuration?: number
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  styles,
  animationStyles = defaultAnimationStyles,
  ToggleIcon,
  toggleControlForm,
  slideDuration = 700,
}) => {
  const { formVisible } = useContext(ConsentManagerDefaultInterfaceContext)
  return (
    <CSSTransition
      in={formVisible}
      timeout={slideDuration}
      classNames={animationStyles}
    >
      <button
        className={clsx(styles.toggleButton)}
        title={`Toggle website settings visibility`}
        onClick={e => toggleControlForm(e)}
        style={{
          transitionDuration: `${slideDuration}ms`,
        }}
      >
        <div className={clsx(styles.toggleButtonContent)}>
          <ToggleIcon className={clsx(styles.toggleButtonIcon)} />
        </div>
      </button>
    </CSSTransition>
  )
}
