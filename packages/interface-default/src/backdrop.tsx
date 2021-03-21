// @todo hide toggle button via animation, use only big buttons to save & close
// @todo blur/darken background when scroll lock is active

import React from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import defaultAnimationStyles from './animation-blur.module.css'
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
  <CSSTransition in={show} timeout={fadeDuration} classNames={animationStyles}>
    <div
      id="backdrop"
      className={clsx(styles.backdrop)}
      style={{
        transitionDuration: `${fadeDuration}ms`,
      }}
    />
  </CSSTransition>
)
