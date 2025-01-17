import React from 'react'
import clsx from 'clsx'

import defaultStyles from './index.module.css'
import { Styles } from './index'

export interface BackdropProps {
  styles?: Styles
  animationStyles?: Styles
}

export const Backdrop: React.FC<BackdropProps> = ({
  styles = defaultStyles,
}) => {
  return (
    <div
      id="backdrop"
      className={clsx(styles.backdrop)}
    />
  )
}
