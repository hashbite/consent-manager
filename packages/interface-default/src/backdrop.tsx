import React, { useContext } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import defaultAnimationStyles from './animation-fade.module.css'
import defaultStyles from './index.module.css'
import { Styles } from './index'
import { ConsentManagerDefaultInterfaceContext } from './context'

export interface BackdropProps {
  fadeDuration: number
  styles?: Styles
  animationStyles?: Styles
}

export const Backdrop: React.FC<BackdropProps> = ({
  fadeDuration,
  styles = defaultStyles,
  animationStyles = defaultAnimationStyles,
}) => {
  const { formVisible } = useContext(ConsentManagerDefaultInterfaceContext)
  return (
    <CSSTransition
      in={formVisible}
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
}
