import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import { IoShieldCheckmark } from '@react-icons/all-files/io5/IoShieldCheckmark'
import { IoClose } from '@react-icons/all-files/io5/IoClose'
import loadable from '@loadable/component'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { use100vh } from 'react-div-100vh'

import {
  DecisionsFormProps,
  useConsentFormVisible,
} from '@consent-manager/core'

import { Switch as DefaultSwitch } from './switch'
import defaultStyles from './index.module.css'
import defaultAnimationStyles from './animation-slide.module.css'
import { Introduction } from './introduction'
import { Backdrop } from './backdrop'
import { ConsentManagerDefaultInterfaceContext } from './context'
import { ConsentManagerDefaultInterfaceDesignProps } from './index'
import { ToggleButton as DefaultToggleButton } from './toggle-button'
import { useDefaultButton } from './default-button'

const DefaultForm = loadable(() => import('./form'))

export interface InterfaceProps
  extends DecisionsFormProps,
    ConsentManagerDefaultInterfaceDesignProps {}

export const Interface: React.FC<InterfaceProps> = ({
  integrations,
  initialValues,
  onSubmit,
  useDefaultButtonForIntroduction = true,
  slideDuration = 700,
  styles = defaultStyles,
  CloseIcon = IoClose,
  ToggleIcon = IoShieldCheckmark,
  ToggleButton = DefaultToggleButton,
  Switch = DefaultSwitch,
  Button = props => <button {...props} />,
  Form = DefaultForm,
  animationStyles = defaultAnimationStyles,
}) => {
  const DefaultButton = useDefaultButton(styles)
  const hasPendingDecisions = useConsentFormVisible()
  const { formVisible, setFormVisible } = useContext(
    ConsentManagerDefaultInterfaceContext
  )

  const [needsIntroduction, setNeedsIntroduction] = useState(
    hasPendingDecisions
  )

  const introductionFinished = useCallback(() => {
    setNeedsIntroduction(false)
  }, [setNeedsIntroduction])

  const formContainerRef = useRef<HTMLDivElement>(null)

  const toggleControlForm = useCallback(
    e => {
      e.preventDefault()
      setFormVisible(!formVisible)
    },
    [formVisible, setFormVisible]
  )

  // Freeze scroll when form is shown
  useEffect(() => {
    const target: HTMLDivElement | null = formContainerRef.current

    if (!target) {
      return
    }

    if (formVisible) {
      disableBodyScroll(target)
      target.scrollTo({ top: 0 })
    }

    if (!formVisible) {
      enableBodyScroll(target)
    }

    return clearAllBodyScrollLocks
  }, [formVisible, formContainerRef])

  // Get 100vh on mobile browsers as well
  const viewportHeight = use100vh()

  const handleEsc = useCallback(
    e => {
      if (formVisible && e.keyCode === 27) {
        e.preventDefault()
        setFormVisible(false)
      }
    },
    [formVisible, setFormVisible]
  )

  // Allow close on ESC key
  useEffect(() => {
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  // Check if component was mounted for SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  // Do not render the interface on SSR.
  if (!isMounted) {
    return null
  }

  return (
    <div className={clsx(styles.wrapper)} id="consent-control-ui">
      {needsIntroduction && (
        <Introduction
          introductionFinished={introductionFinished}
          slideDuration={slideDuration}
          CloseIcon={CloseIcon}
          Button={useDefaultButtonForIntroduction ? DefaultButton : Button}
        />
      )}
      <Backdrop fadeDuration={slideDuration} styles={styles} />
      <CSSTransition
        in={formVisible}
        timeout={slideDuration}
        classNames={animationStyles}
        unmountOnExit
        mountOnEnter
      >
        <div
          className={clsx(styles.pane, styles.slide)}
          style={{
            transitionDuration: `${slideDuration}ms`,
          }}
        >
          <section
            className={clsx(styles.form)}
            style={{
              maxHeight: viewportHeight ? `${viewportHeight}px` : 'null',
            }}
            ref={formContainerRef}
          >
            {formVisible && (
              <Form
                styles={styles}
                onSubmit={onSubmit}
                integrations={integrations}
                initialValues={initialValues}
                Switch={Switch}
                Button={Button}
                CloseIcon={CloseIcon}
                ToggleIcon={ToggleIcon}
              />
            )}
          </section>
        </div>
      </CSSTransition>
      <ToggleButton
        ToggleIcon={ToggleIcon}
        styles={styles}
        toggleControlForm={toggleControlForm}
      />
    </div>
  )
}
