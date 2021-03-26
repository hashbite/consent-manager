import React, { useMemo, useState, useEffect } from 'react'

import {
  IntegrationConfig,
  ConsentManagerConfig,
  ConsentManagerDecisions,
} from '../config'
import { useDecisions } from '../decisions'

type IntegrationWithWrapperComponent = IntegrationConfig &
  Required<Pick<IntegrationConfig, 'WrapperComponent'>>

function useWrapperComponents(
  config: ConsentManagerConfig,
  decisions: ConsentManagerDecisions
): React.ComponentType {
  const Wrapper: React.ComponentType = useMemo(() => {
    return (({ children }) => {
      return config.integrations
        .filter(i => decisions[i.id] === true)
        .filter((i): i is IntegrationWithWrapperComponent =>
          Boolean(i.WrapperComponent)
        )
        .reverse()
        .reduce((children, { WrapperComponent }) => {
          return <WrapperComponent>{children}</WrapperComponent>
        }, children)
    }) as React.FC
  }, [config.integrations, decisions])
  return Wrapper
}

export const IntegrationWrapperComponents: React.FC<{
  config: ConsentManagerConfig
}> = ({ config, children }) => {
  const [decisions] = useDecisions()
  const Wrapper = useWrapperComponents(config, decisions)

  // Check if component was mounted for SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  // Do not render the interface on SSR.
  if (!isMounted) {
    return <>{children}</>
  }

  return <Wrapper>{children}</Wrapper>
}
