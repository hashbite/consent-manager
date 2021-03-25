import React from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import defaultAnimationStyles from './animation-fade.module.css'
import defaultStyles from './index.module.css'
import { Styles } from './index'

export interface BackdropProps {
  show: boolean
  fadeDuration: number
  styles?: Styles
  animationStyles?: Styles
}

export const Backdrop: React.FC<BackdropProps> = ({
  show,
  fadeDuration,
  styles = defaultStyles,
  animationStyles = defaultAnimationStyles,
}) => (
  <CSSTransition
    in={show}
    timeout={fadeDuration}
    classNames={animationStyles}
    mountOnEnter
    unmountOnExit
  >
    <div
      id="backdrop"
      className={clsx(styles.backdrop)}
      style={{
        transitionDuration: `${fadeDuration}ms`,
      }}
    />
  </CSSTransition>
)
