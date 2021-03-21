import React from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import { Styles, ToggleIconProps } from './index'

import defaultAnimationStyles from './animation-slide-out.module.css'

export interface ToggleButtonProps {
  styles: Styles
  animationStyles?: Styles
  ToggleIcon: React.ComponentType<ToggleIconProps>
  showForm: boolean
  toggleControlForm: Function
  slideDuration?: number
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  styles,
  animationStyles = defaultAnimationStyles,
  ToggleIcon,
  showForm,
  toggleControlForm,
  slideDuration = 700,
}) => (
  <CSSTransition
    in={showForm}
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
      <div className={clsx(styles.pane, styles.toggleButtonContent)}>
        <ToggleIcon className={clsx(showForm && styles.inverted)} />
      </div>
    </button>
  </CSSTransition>
)
